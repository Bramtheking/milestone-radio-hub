import { ArrowLeft, Download, Smartphone, Radio, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import milestonelogo from '@/assets/milestone-logo.png';

const MobileApp = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // Official Play Store link
    window.open('https://play.google.com/store/apps/details?id=com.milestoneinstitute.radio', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-milestone-navy via-milestone-navy/90 to-milestone-teal">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src={milestonelogo} 
                alt="Milestone Radio" 
                className="h-20 w-20"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Milestone Radio Mobile App
            </h1>
            <p className="text-xl text-milestone-cyan mb-4 max-w-2xl mx-auto">
              Experience the full power of Milestone Radio on your mobile device. Listen to live broadcasts, read articles, and stay connected wherever you go.
            </p>
            <div className="inline-block bg-milestone-teal/30 backdrop-blur-sm border border-milestone-teal/50 rounded-full px-6 py-2 mb-8">
              <p className="text-white font-semibold">
                🎉 Now Available on Google Play Store for Android!
              </p>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Smartphone className="h-16 w-16 text-milestone-cyan" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Take Milestone Radio Anywhere
                </h2>
                <p className="text-white/90 mb-6">
                  Our mobile app is now officially available on the Google Play Store! Enjoy seamless access to educational content, live radio streams, and the latest articles - all optimized for your mobile experience.
                </p>
                <Button 
                  onClick={handleDownload}
                  className="bg-milestone-teal hover:bg-milestone-teal/90 text-white font-semibold px-8 py-3 text-lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Get it on Play Store
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Radio className="h-6 w-6 mr-2 text-milestone-cyan" />
                  Live Radio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Stream live educational content and broadcasts directly on your phone with crystal clear audio quality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <FileText className="h-6 w-6 mr-2 text-milestone-cyan" />
                  Articles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Read the latest educational articles and insights, perfectly formatted for mobile reading.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Shield className="h-6 w-6 mr-2 text-milestone-cyan" />
                  Offline Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Download articles for offline reading and never miss important educational content.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Download Section */}
          <div className="text-center">
            <Card className="bg-milestone-teal/20 backdrop-blur-sm border-milestone-teal/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-white/90 mb-6">
                  Join thousands of learners who are already using the Milestone Radio mobile app to enhance their educational journey. Download now from the Google Play Store!
                </p>
                <Button 
                  onClick={handleDownload}
                  size="lg"
                  className="bg-white text-milestone-navy hover:bg-white/90 font-semibold px-8 py-3"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download from Play Store
                </Button>
                <p className="text-sm text-white/70 mt-4">
                  Available now on Google Play Store for Android devices. iOS version coming soon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
