import { Calendar, User, Tag } from 'lucide-react';
import { Article } from '@/types/article';
import { Button } from '@/components/ui/button';

interface ArticleCardProps {
  article: Article;
  onReadMore?: () => void;
}

const ArticleCard = ({ article, onReadMore }: ArticleCardProps) => {
  return (
    <div className="article-card group">
      <div className="relative overflow-hidden">
        <img 
          src={article.featuredImage} 
          alt={article.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-milestone-red text-white px-3 py-1 rounded-full text-sm font-semibold">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl mb-3 text-milestone-navy line-clamp-2 group-hover:text-milestone-blue transition-colors">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{article.createdAt.toLocaleDateString()}</span>
          </div>
        </div>
        
        <Button 
          onClick={onReadMore}
          variant="outline"
          className="w-full border-milestone-blue text-milestone-blue hover:bg-milestone-blue hover:text-white"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default ArticleCard;