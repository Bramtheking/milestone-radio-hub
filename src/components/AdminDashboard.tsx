import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useArticles } from '@/hooks/useArticles';
import { Article } from '@/types/article';
import ArticleEditor from './ArticleEditor';
import { Plus, Edit, Trash2, LogOut, ArrowLeft, BarChart3 } from 'lucide-react';
import milestonelogo from '@/assets/milestone-logo.png';

interface AdminDashboardProps {
  onBackToSite: () => void;
}

const AdminDashboard = ({ onBackToSite }: AdminDashboardProps) => {
  const [showEditor, setShowEditor] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | undefined>(undefined);
  const { articles, addArticle, updateArticle, deleteArticle, loading } = useArticles();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
      onBackToSite();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSaveArticle = async (articleData: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      if (editingArticle) {
        await updateArticle(editingArticle.id, articleData);
        toast({
          title: "Success",
          description: "Article updated successfully!",
        });
      } else {
        await addArticle(articleData);
        toast({
          title: "Success",
          description: "Article published successfully!",
        });
      }
      setShowEditor(false);
      setEditingArticle(undefined);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save article. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      try {
        await deleteArticle(id);
        toast({
          title: "Success",
          description: "Article deleted successfully!",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to delete article. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const handleEditArticle = (article: Article) => {
    setEditingArticle(article);
    setShowEditor(true);
  };

  if (showEditor) {
    return (
      <div className="admin-panel">
        <div className="container mx-auto py-8">
          <ArticleEditor
            article={editingArticle}
            onSave={handleSaveArticle}
            onCancel={() => {
              setShowEditor(false);
              setEditingArticle(undefined);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img src={milestonelogo} alt="Milestone Institute" className="h-12 w-12" />
            <div>
              <h1 className="text-3xl font-bold text-milestone-navy">Admin Panel</h1>
              <p className="text-muted-foreground">Manage Milestone Radio articles and content</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={onBackToSite}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Site
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-milestone-blue">{articles.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published Today</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-milestone-cyan">
                {articles.filter(article => {
                  const today = new Date();
                  const articleDate = article.createdAt;
                  return articleDate.toDateString() === today.toDateString();
                }).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-milestone-red">
                {new Set(articles.map(article => article.category)).size}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Articles Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Articles Management</CardTitle>
                <CardDescription>Create, edit, and manage your radio articles</CardDescription>
              </div>
              <Button onClick={() => setShowEditor(true)} className="bg-milestone-blue hover:bg-milestone-navy">
                <Plus className="h-4 w-4 mr-2" />
                Create New Article
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading articles...</div>
            ) : articles.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No articles yet. Create your first article to get started!
              </div>
            ) : (
              <div className="space-y-4">
                {articles.map((article) => (
                  <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center space-x-4">
                      {article.featuredImage && (
                        <img 
                          src={article.featuredImage} 
                          alt={article.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      )}
                      <div>
                        <h3 className="font-semibold text-milestone-navy">{article.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{article.category}</span>
                          <span>By {article.author}</span>
                          <span>{article.createdAt.toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditArticle(article)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteArticle(article.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;