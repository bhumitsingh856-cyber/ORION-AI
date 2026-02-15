import nodemailer from "nodemailer";
import "dotenv/config";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_GMAIL,
    pass: process.env.NODEMAILER_PASS,
  },
});

export const sendEmail = async (to, name) => {
  const mailOptions = {
    from: `"Orion Studio" <${process.env.NODEMAILER_GMAIL}>`,
    to,
    subject: "🚀 Welcome to Orion Studio - Your AI Journey Begins!",
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Orion Studio</title>
    </head>
    <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      
      <div style="max-width: 600px; margin: 40px auto; background-color: #000000;">
        
        <!-- Header with gradient -->
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ec4899 100%); padding: 50px 40px; text-align: center; position: relative; overflow: hidden;">
          <!-- Animated circles background -->
          <div style="position: absolute; top: -50px; left: -50px; width: 150px; height: 150px; background: rgba(59, 130, 246, 0.3); border-radius: 50%; filter: blur(40px);"></div>
          <div style="position: absolute; bottom: -50px; right: -50px; width: 200px; height: 200px; background: rgba(168, 85, 247, 0.3); border-radius: 50%; filter: blur(50px);"></div>
          
          <!-- Logo -->
          <div style="position: relative; z-index: 1;">
            <table cellpadding="0" cellspacing="0" border="0" align="center">
              <tr>
                <td style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); width: 60px; height: 60px; border-radius: 12px; text-align: center; box-shadow: 0 10px 40px rgba(59, 130, 246, 0.5);">
                  <span style="color: white; font-size: 32px; font-weight: bold; line-height: 60px;">O</span>
                </td>
              </tr>
            </table>
            
            <h1 style="color: white; font-size: 36px; font-weight: bold; margin: 20px 0 0 0; text-shadow: 0 4px 20px rgba(0,0,0,0.3);">
              ORION STUDIO
            </h1>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; margin: 10px 0 0 0; letter-spacing: 2px;">
              MULTIMODAL AI WORKSPACE
            </p>
          </div>
        </div>

        <!-- Main Content -->
        <div style="padding: 50px 40px; background-color: #0a0a0a;">
          
          <!-- Welcome Message -->
          <div style="text-align: center; margin-bottom: 40px;">
            <h2 style="color: #ffffff; font-size: 32px; font-weight: bold; margin: 0 0 15px 0;">
              Welcome Aboard, ${name}! 🚀
            </h2>
            <p style="color: #a3a3a3; font-size: 16px; line-height: 1.6; margin: 0;">
              We're thrilled to have you join the Orion Studio community. Your account has been successfully created and your AI-powered journey begins now.
            </p>
          </div>

          <!-- Features Grid -->
          <div style="margin: 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
              <tr>
                <td style="padding: 20px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px; width: 48%;">
                  <div style="font-size: 32px; margin-bottom: 10px;">💬</div>
                  <h3 style="color: #60a5fa; font-size: 16px; margin: 0 0 8px 0; font-weight: 600;">Smart Chat</h3>
                  <p style="color: #737373; font-size: 13px; margin: 0; line-height: 1.5;">Natural conversations powered by advanced AI</p>
                </td>
                <td style="width: 4%;"></td>
                <td style="padding: 20px; background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 12px; width: 48%;">
                  <div style="font-size: 32px; margin-bottom: 10px;">📄</div>
                  <h3 style="color: #c084fc; font-size: 16px; margin: 0 0 8px 0; font-weight: 600;">Document AI</h3>
                  <p style="color: #737373; font-size: 13px; margin: 0; line-height: 1.5;">Extract insights from any document instantly</p>
                </td>
              </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
              <tr>
                <td style="padding: 20px; background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 12px; width: 48%;">
                  <div style="font-size: 32px; margin-bottom: 10px;">🌐</div>
                  <h3 style="color: #4ade80; font-size: 16px; margin: 0 0 8px 0; font-weight: 600;">Web Search</h3>
                  <p style="color: #737373; font-size: 13px; margin: 0; line-height: 1.5;">Real-time information from across the web</p>
                </td>
                <td style="width: 4%;"></td>
                <td style="padding: 20px; background: linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(219, 39, 119, 0.05) 100%); border: 1px solid rgba(236, 72, 153, 0.2); border-radius: 12px; width: 48%;">
                  <div style="font-size: 32px; margin-bottom: 10px;">🎨</div>
                  <h3 style="color: #f472b6; font-size: 16px; margin: 0 0 8px 0; font-weight: 600;">Image Generation</h3>
                  <p style="color: #737373; font-size: 13px; margin: 0; line-height: 1.5;">Create stunning visuals with AI</p>
                </td>
              </tr>
            </table>
          </div>

          <!-- CTA Button -->
          <div style="text-align: center; margin: 50px 0 40px 0;">
            <table cellpadding="0" cellspacing="0" border="0" align="center">
              <tr>
                <td style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); border-radius: 12px; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);">
                  <a href="${process.env.FRONTEND_URL || "https://orionstudio.com"}/dashboard" style="display: block; padding: 16px 40px; color: white; text-decoration: none; font-size: 16px; font-weight: 600;">
                    Get Started Now →
                  </a>
                </td>
              </tr>
            </table>
          </div>

          <!-- Quick Tips -->
          <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%); border-left: 4px solid #3b82f6; padding: 25px; border-radius: 8px; margin: 40px 0;">
            <h3 style="color: #60a5fa; font-size: 18px; margin: 0 0 15px 0; font-weight: 600;">💡 Quick Start Tips</h3>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="color: #a3a3a3; font-size: 14px; line-height: 2; padding-left: 20px;">
                  • Start a new chat to explore AI capabilities<br>
                  • Upload your first document for instant analysis<br>
                  • Try asking questions about current events<br>
                  • Generate your first AI image
                </td>
              </tr>
            </table>
          </div>

          <!-- Support -->
          <div style="text-align: center; margin-top: 50px; padding-top: 30px; border-top: 1px solid #1f1f1f;">
            <p style="color: #737373; font-size: 14px; margin: 0 0 10px 0;">
              Need help getting started?
            </p>
            <p style="color: #a3a3a3; font-size: 13px; margin: 0;">
              Reply to this email or visit our <a href="${process.env.FRONTEND_URL || "https://orionstudio.com"}/help" style="color: #60a5fa; text-decoration: none;">Help Center</a>
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%); padding: 30px 40px; text-align: center; border-top: 1px solid rgba(59, 130, 246, 0.1);">
          <!-- Social Links -->
          <div style="margin-bottom: 20px;">
            <a href="https://www.instagram.com/crazyx148?igsh=MXk5enR5MGdobDd2" style="display: inline-block; margin: 0 10px; color: #737373; text-decoration: none; font-size: 12px;">Instagram</a>
            <span style="color: #333;">•</span>
            <a href="linkedin.com/in/bhumit-singh-220015327" style="display: inline-block; margin: 0 10px; color: #737373; text-decoration: none; font-size: 12px;">LinkedIn</a>
            <span style="color: #333;">•</span>
            <a href="https://discord.gg/orionstudio" style="display: inline-block; margin: 0 10px; color: #737373; text-decoration: none; font-size: 12px;">Discord</a>
          </div>

          <p style="color: #525252; font-size: 12px; margin: 0;">
            &copy; 2026 Orion Studio. All rights reserved.
          </p>
          <p style="color: #404040; font-size: 11px; margin: 10px 0 0 0;">
            Indore, Madhya Pradesh, India
          </p>

          
        </div>

      </div>

    </body>
    </html>
    `,
    // Plain text fallback
    text: `
Welcome to Orion Studio, ${name}!

We're thrilled to have you join our AI-powered workspace. Your account has been successfully created and you can now access all features:

- Smart Chat - Natural AI conversations
- Document AI - Extract insights from documents
- Web Search - Real-time information access
- Image Generation - Create stunning visuals

Get started now: ${process.env.FRONTEND_URL || "https://orionstudio.com"}/dashboard

Need help? Just reply to this email.

Best regards,
Orion Studio Team

---
© 2026 Orion Studio. All rights reserved.
    `.trim(),
  };

  return await transporter.sendMail(mailOptions);
};
