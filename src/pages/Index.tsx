import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useArticles } from '@/hooks/useArticles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RadioPlayer from '@/components/RadioPlayer';
import ArticleCard from '@/components/ArticleCard';
import ArticleDetailDialog from '@/components/ArticleDetailDialog';
import LoginForm from '@/components/LoginForm';
import AdminDashboard from '@/components/AdminDashboard';
import Courses from '@/components/Courses';
import Gallery from '@/components/Gallery';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Radio, Newspaper, Users, Award } from 'lucide-react';
import { Article } from '@/types/article';

const Index = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isArticleDialogOpen, setIsArticleDialogOpen] = useState(false);
  const { user, loading: authLoading } = useAuth();
  const { articles, loading: articlesLoading } = useArticles();

  const handleAdminClick = () => {
    setShowAdmin(true);
  };

  const handleBackToSite = () => {
    setShowAdmin(false);
  };

  // Show admin panel if user is authenticated and admin mode is active
  if (showAdmin) {
    if (authLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-milestone-blue mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        </div>
      );
    }

    if (!user) {
      return <LoginForm onSuccess={() => {}} />;
    }

    return <AdminDashboard onBackToSite={handleBackToSite} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar onAdminClick={handleAdminClick} />
      
      {/* Hero Section with Radio Player */}
      <section id="home" className="hero-section py-16">
        <div className="container mx-auto px-4">
          <RadioPlayer />
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-milestone-navy mb-4">
              Why Choose Milestone Radio?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your premier destination for educational content, inspiring stories, and community connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Radio className="h-12 w-12 text-milestone-blue mx-auto mb-4" />
                <CardTitle className="text-milestone-navy">Live Broadcasting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  24/7 live educational radio programming with quality content for our community.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Newspaper className="h-12 w-12 text-milestone-cyan mx-auto mb-4" />
                <CardTitle className="text-milestone-navy">Latest Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stay informed with our latest news, educational content, and inspiring stories.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-milestone-red mx-auto mb-4" />
                <CardTitle className="text-milestone-navy">Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connecting our community through shared learning experiences and growth.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-milestone-orange mx-auto mb-4" />
                <CardTitle className="text-milestone-navy">Quality Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn, grow, and thrive with our educational programming and resources.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <Courses />

      {/* Articles Section */}
      <section id="articles" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-milestone-navy mb-4">
              Latest News & Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest stories and educational content from Milestone Radio.
            </p>
          </div>
          
          {articlesLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-milestone-blue mx-auto mb-4"></div>
              <p>Loading articles...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12">
              <Newspaper className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-milestone-navy mb-2">No Articles Yet</h3>
              <p className="text-muted-foreground">
                Check back soon for the latest news and educational content!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(0, 6).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onReadMore={() => {
                    setSelectedArticle(article);
                    setIsArticleDialogOpen(true);
                  }}
                />
              ))}
            </div>
          )}
          
          {articles.length > 6 && (
            <div className="text-center mt-8">
              <Button variant="outline" className="border-milestone-blue text-milestone-blue hover:bg-milestone-blue hover:text-white">
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      <Footer onAdminClick={handleAdminClick} />

      {/* Article Detail Dialog */}
      <ArticleDetailDialog 
        article={selectedArticle}
        open={isArticleDialogOpen}
        onOpenChange={setIsArticleDialogOpen}
      />
    </div>
  );
};

export default Index;
