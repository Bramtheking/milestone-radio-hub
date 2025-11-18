import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Make sure this is imported
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { uploadToCloudinary } from '@/lib/cloudinary';
import { Article } from '@/types/article';
import { useToast } from '@/hooks/use-toast';
import { Upload, Save, X } from 'lucide-react';

interface ArticleEditorProps {
  article?: Article;
  onSave: (article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onCancel: () => void;
}

const ArticleEditor = ({ article, onSave, onCancel }: ArticleEditorProps) => {
  const [title, setTitle] = useState(article?.title || '');
  const [author, setAuthor] = useState(article?.author || 'Milestone Team');
  const [category, setCategory] = useState(article?.category || 'General');
  const [featuredImage, setFeaturedImage] = useState(article?.featuredImage || '');
  const [excerpt, setExcerpt] = useState(article?.excerpt || '');
  const [content, setContent] = useState(article?.content || ''); // Ensure this is clean
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['link'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['clean']
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'script', 'indent',
    'link', 'color', 'background', 'align'
  ];

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const imageUrl = await uploadToCloudinary(file);
      setFeaturedImage(imageUrl);
      toast({
        title: "Success",
        description: "Image uploaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Title and content are required.",
        variant: "destructive",
      });
      return;
    }

    onSave({
      title: title.trim(),
      author: author.trim(),
      category,
      featuredImage,
      excerpt: excerpt.trim(),
      content: content.trim(), // Trim content as well
    });
  };

  // Clear content function for debugging
  const clearContent = () => {
    setContent('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-milestone-navy">
          {article ? 'Edit Article' : 'Create New Article'}
        </h2>
        <Button variant="ghost" size="icon" onClick={onCancel}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter article title..."
              required
            />
          </div>
          
          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="News">News</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
                <SelectItem value="Sports">Sports</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author name..."
          />
        </div>

        <div>
          <Label htmlFor="featuredImage">Featured Image</Label>
          <div className="flex items-center space-x-4">
            <Input
              id="featuredImage"
              value={featuredImage}
              onChange={(e) => setFeaturedImage(e.target.value)}
              placeholder="Image URL or upload below..."
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="shrink-0"
            >
              {isUploading ? 'Uploading...' : <><Upload className="h-4 w-4 mr-2" /> Upload</>}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          {featuredImage && (
            <img src={featuredImage} alt="Preview" className="mt-4 h-32 w-48 object-cover rounded-lg" />
          )}
        </div>

        <div>
          <Label htmlFor="excerpt">Excerpt (Brief Summary)</Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Brief summary of the article..."
            rows={3}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <Label htmlFor="content">Content *</Label>
            <Button 
              type="button" 
              variant="ghost" 
              size="sm"
              onClick={clearContent}
              className="text-red-500 hover:text-red-700"
            >
              Clear Content
            </Button>
          </div>
          <div className="border rounded-lg overflow-hidden bg-white">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              placeholder="Start writing your article..."
              className="bg-white quill-custom"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="bg-milestone-blue hover:bg-milestone-navy">
            <Save className="h-4 w-4 mr-2" />
            {article ? 'Update Article' : 'Publish Article'}
          </Button>
        </div>
      </form>

    </div>
  );
};

export default ArticleEditor;
