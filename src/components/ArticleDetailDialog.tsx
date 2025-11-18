import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Article } from '@/types/article';
import { Calendar, User, Tag } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ArticleDetailDialogProps {
  article: Article | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ArticleDetailDialog = ({ article, open, onOpenChange }: ArticleDetailDialogProps) => {
  if (!article) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-milestone-navy">
            {article.title}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-full max-h-[calc(90vh-8rem)] pr-4">
          <div className="space-y-4">
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <img 
                src={article.featuredImage} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-milestone-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{article.createdAt.toLocaleDateString()}</span>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg font-medium text-muted-foreground mb-4">
                {article.excerpt}
              </p>
              <div 
                className="text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleDetailDialog;
