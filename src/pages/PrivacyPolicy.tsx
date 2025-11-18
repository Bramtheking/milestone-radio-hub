import { Shield, Lock, Eye, Database, UserCheck, FileText, Mail, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-milestone-navy via-milestone-blue to-milestone-cyan text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-white/90">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-white/70 mt-4">
              Last Updated: October 10, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-milestone-navy">
                  <FileText className="h-6 w-6 text-milestone-blue" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Milestone Institute Radio. We are committed to protecting your personal information 
                  and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and 
                  safeguard your information when you visit our website and use our radio streaming services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                  policy, please do not access the site.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-milestone-navy">
                  <Database className="h-6 w-6 text-milestone-cyan" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-milestone-navy mb-2">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                    <li>Contact us through our contact forms</li>
                    <li>Subscribe to our newsletter or updates</li>
                    <li>Participate in surveys or promotions</li>
                    <li>Register for courses or events</li>
                    <li>Access our admin portal (for authorized personnel)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-milestone-navy mb-2">Automatically Collected Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you visit our website, we automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                    <li>IP address and browser type</li>
                    <li>Operating system and device information</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Radio streaming usage data</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-milestone-navy">
                  <Eye className="h-6 w-6 text-milestone-blue" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect or receive to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, operate, and maintain our radio streaming services</li>
                  <li>Improve, personalize, and expand our services</li>
                  <li>Understand and analyze how you use our website and services</li>
                  <li>Develop new features, products, and services</li>
                  <li>Communicate with you for customer service and support</li>
                  <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
                  <li>Process your course registrations and inquiries</li>
                  <li>Prevent fraudulent activities and ensure security</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-milestone-navy">
                  <Lock className="h-6 w-6 text-milestone-red" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  These measures include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Secure server infrastructure with encryption</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                  <li>Secure backup and recovery procedures</li>
                </ul>
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg flex gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    However, please note that no method of transmission over the Internet or electronic 
                    storage is 100% secure. While we strive to protect your personal information, we cannot 
                    guarantee its absolute security.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sharing Your Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-milestone-navy">
                  <UserCheck className="h-6 w-6 text-milestone-cyan" />
                  Sharing Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>With your consent:</strong> When you explicitly agree to share your information</li>
                  <li><strong>Service providers:</strong> With trusted third-party vendors who assist us in operating our website and services</li>
                  <li><strong>Legal requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business transfers:</strong> In connection with any merger, sale, or transfer of our assets</li>
                  <li><strong>Milestone Institute:</strong> With our parent institution for educational and administrative purposes</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-milestone-navy">
                  <Database className="h-6 w-6 text-milestone-blue" />
                  Cookies and Tracking Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and 
                  store certain information. Cookies are files with a small amount of data that are sent 
                  to your browser from a website and stored on your device.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being 
                  sent. However, if you do not accept cookies, you may not be able to use some portions of 
                  our service.
                </p>
              </CardContent>
            </Card>

            {/* Your Privacy Rights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-milestone-navy">
                  <Shield className="h-6 w-6 text-milestone-red" />
                  Your Privacy Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Objection:</strong> Object to our processing of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                  <li><strong>Withdraw consent:</strong> Withdraw your consent at any time</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            {/* Third-Party Links */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-milestone-navy">
                  <FileText className="h-6 w-6 text-milestone-cyan" />
                  Third-Party Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites that are not operated by us. If you 
                  click on a third-party link, you will be directed to that third party's site. We strongly 
                  advise you to review the Privacy Policy of every site you visit. We have no control over 
                  and assume no responsibility for the content, privacy policies, or practices of any 
                  third-party sites or services.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-milestone-navy">
                  <UserCheck className="h-6 w-6 text-milestone-blue" />
                  Children's Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 13. We do not knowingly 
                  collect personal information from children under 13. If you are a parent or guardian and 
                  you are aware that your child has provided us with personal information, please contact us. 
                  If we become aware that we have collected personal information from children without 
                  verification of parental consent, we will take steps to remove that information from our servers.
                </p>
              </CardContent>
            </Card>

            {/* Changes to This Policy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-milestone-navy">
                  <AlertCircle className="h-6 w-6 text-milestone-red" />
                  Changes to This Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last Updated" date at the top 
                  of this policy. You are advised to review this Privacy Policy periodically for any changes. 
                  Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card className="mb-8 border-milestone-blue/30">
              <CardHeader className="bg-gradient-to-br from-milestone-blue/5 to-milestone-cyan/5">
                <CardTitle className="flex items-center gap-3 text-milestone-navy">
                  <Mail className="h-6 w-6 text-milestone-cyan" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions or concerns about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="space-y-3 bg-milestone-navy/5 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-milestone-blue mt-0.5" />
                    <div>
                      <p className="font-semibold text-milestone-navy">Email</p>
                      <a href="mailto:radio@milestoneinstitute.ac.ke" className="text-milestone-blue hover:text-milestone-cyan transition-colors">
                        radio@milestoneinstitute.ac.ke
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-milestone-cyan mt-0.5" />
                    <div>
                      <p className="font-semibold text-milestone-navy">Institution</p>
                      <p className="text-muted-foreground">Milestone Institute</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-milestone-red mt-0.5" />
                    <div>
                      <p className="font-semibold text-milestone-navy">Enquiries Portal</p>
                      <a 
                        href="https://portal.milestoneinstitute.ac.ke/enquiries?cid=Sm+BFwHAOCU/R+Rv3s4GpQ==" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-milestone-blue hover:text-milestone-cyan transition-colors"
                      >
                        Submit an Enquiry
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Back to Home Button */}
            <div className="text-center">
              <Button 
                onClick={() => navigate('/')}
                className="bg-milestone-blue hover:bg-milestone-navy text-white px-8"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
