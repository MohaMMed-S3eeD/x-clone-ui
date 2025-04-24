# 🚀 X Clone UI

![GitHub](https://img.shields.io/badge/Next.js-15.1.0-black)
![GitHub](https://img.shields.io/badge/React-19.0.0-blue)
![GitHub](https://img.shields.io/badge/Tailwind-3.4.1-cyan)
<img src="https://img.shields.io/badge/✨-Modern%20UI-blue" alt="Modern UI"/> <img src="https://img.shields.io/badge/🔥-Responsive-orange" alt="Responsive"/> <img src="https://img.shields.io/badge/⚡-Fast-yellow" alt="Fast"/>

<div align="center">
  <h3>🌐 <a href="https://x-mo.vercel.app/">Live Demo</a> 🌐</h3>
</div>

<p align="center">
  A modern Twitter/X clone built with Next.js, featuring responsive design, image uploads, content warnings, and interactive elements.
</p>

---

<h2 align="center">✨ Features ✨</h2>

<table style="width: 100%; border-collapse: separate; border-spacing: 10px; margin: 30px auto;">
  <tr>
    <!-- First column -->
    <td style="width: 50%; vertical-align: top;">
      <table style="width: 100%; border-collapse: separate; border-spacing: 0 15px;">
        <tr>
          <td style="width: 80px; text-align: center; background-color: #1a1a1a; border-radius: 10px 0 0 10px; border-right: 1px solid #333;">
            <span style="font-size: 2em;">🏠</span>
          </td>
          <td style="background-color: #1a1a1a; padding: 20px; border-radius: 0 10px 10px 0;">
            <h3 style="margin: 0 0 10px 0; color: #ffffff; font-weight: 600;">Responsive Feed</h3>
            <p style="margin: 0; color: #cccccc;">Modern timeline with support for text, images, and videos.</p>
          </td>
        </tr>
        <tr>
          <td style="width: 80px; text-align: center; background-color: #1a1a1a; border-radius: 10px 0 0 10px; border-right: 1px solid #333;">
            <span style="font-size: 2em;">⚠️</span>
          </td>
          <td style="background-color: #1a1a1a; padding: 20px; border-radius: 0 10px 10px 0;">
            <h3 style="margin: 0 0 10px 0; color: #ffffff; font-weight: 600;">Content Warnings</h3>
            <p style="margin: 0; color: #cccccc;">Mark sensitive content with blur effects.</p>
          </td>
        </tr>
        <tr>
          <td style="width: 80px; text-align: center; background-color: #1a1a1a; border-radius: 10px 0 0 10px; border-right: 1px solid #333;">
            <span style="font-size: 2em;">🎮</span>
          </td>
          <td style="background-color: #1a1a1a; padding: 20px; border-radius: 0 10px 10px 0;">
            <h3 style="margin: 0 0 10px 0; color: #ffffff; font-weight: 600;">Modern UI</h3>
            <p style="margin: 0; color: #cccccc;">Dark-themed interface with responsive design.</p>
          </td>
        </tr>
      </table>
    </td>
    <!-- Second column -->
    <td style="width: 50%; vertical-align: top;">
      <table style="width: 100%; border-collapse: separate; border-spacing: 0 15px;">
        <tr>
          <td style="width: 80px; text-align: center; background-color: #1a1a1a; border-radius: 10px 0 0 10px; border-right: 1px solid #333;">
            <span style="font-size: 2em;">🖼️</span>
          </td>
          <td style="background-color: #1a1a1a; padding: 20px; border-radius: 0 10px 10px 0;">
            <h3 style="margin: 0 0 10px 0; color: #ffffff; font-weight: 600;">Image Editor</h3>
            <p style="margin: 0; color: #cccccc;">Crop and format images before posting.</p>
          </td>
        </tr>
        <tr>
          <td style="width: 80px; text-align: center; background-color: #1a1a1a; border-radius: 10px 0 0 10px; border-right: 1px solid #333;">
            <span style="font-size: 2em;">👍</span>
          </td>
          <td style="background-color: #1a1a1a; padding: 20px; border-radius: 0 10px 10px 0;">
            <h3 style="margin: 0 0 10px 0; color: #ffffff; font-weight: 600;">Social Interactions</h3>
            <p style="margin: 0; color: #cccccc;">Like, retweet, comment, and share posts.</p>
          </td>
        </tr>
        <tr>
          <td style="width: 80px; text-align: center; background-color: #1a1a1a; border-radius: 10px 0 0 10px; border-right: 1px solid #333;">
            <span style="font-size: 2em;">📱</span>
          </td>
          <td style="background-color: #1a1a1a; padding: 20px; border-radius: 0 10px 10px 0;">
            <h3 style="margin: 0 0 10px 0; color: #ffffff; font-weight: 600;">Responsive Design</h3>
            <p style="margin: 0; color: #cccccc;">Optimized for all device sizes from mobile to desktop.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

---

## 🖥️ Screenshots

<div align="center">
  <p><i>Visit the <a href="https://x-mo.vercel.app/">live demo</a> to see the app in action!</i></p>
</div>

---

## 🛠️ Technologies

### Frontend
- [Next.js 15.1.0](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

### Media Handling
- [ImageKit](https://imagekit.io/) - Image optimization and storage

### Backend Features
- Server Actions
- Image processing

---

## 🚀 Getting Started

### Prerequisites
- Node.js (18 or later)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/x-clone-ui.git
   cd x-clone-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following:
   ```
   NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_url_endpoint
   IMAGEKIT_PRIVATE_KEY=your_private_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
x-clone-ui/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Feed.tsx         # Feed component
│   │   ├── ImageEditor.tsx  # Image editor
│   │   ├── ImageK.tsx       # Image component wrapper
│   │   ├── LeftBar.tsx      # Left sidebar
│   │   ├── Post.tsx         # Post component
│   │   ├── RightBar.tsx     # Right sidebar
│   │   └── Share.tsx        # Post creation component
│   ├── actions.tsx          # Server actions
│   └── utils.ts             # Utility functions
├── public/                  # Public assets
│   ├── general/             # General images
│   ├── icons/               # Icon assets
│   └── svg/                 # SVG assets
├── .env                     # Environment variables
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Project dependencies
```

---

## 🌟 Key Features in Detail

### Post Creation

Users can create posts with text, images, or videos. The interface provides options for:
- 📝 Text input
- 🖼️ Image uploads with editing capabilities
- 🎬 Video uploads with proper formatting
- ⚠️ Content sensitivity warnings

### Image Editor

The built-in image editor allows users to:
- 🔄 Change aspect ratio (original, wide, square)
- 🚨 Mark content as sensitive
- 👁️ Preview how content will appear

### Feed

The feed displays posts with:
- 👤 User information
- 📄 Post content (text, images, videos)
- 👍 Interaction buttons (like, retweet, comment, view)
- 🚨 Blurred sensitive content with option to view

### Responsive Design

The UI adapts to different screen sizes:
- 📱 Mobile-friendly view
- 💻 Tablet and desktop layouts
- 📊 Responsive sidebar behavior

---

## 🧩 Component Usage

### Share Component

```tsx
import Share from '@/components/Share';

const MyPage = () => {
  return (
    <div>
      <Share />
      {/* Other components */}
    </div>
  );
};
```

### Post Component

```tsx
import Post from '@/components/Post';

const MyFeed = () => {
  return (
    <div>
      <Post fileIdP="your-file-id" />
      {/* More posts */}
    </div>
  );
};
```

### ImageEditor Component

```tsx
import ImageEditor from '@/components/ImageEditor';

const MyEditor = () => {
  const [setting, setSetting] = useState({
    type: "original",
    sensitive: false
  });

  return (
    <ImageEditor
      prevUrlEditor="image-url"
      onClose={() => setIsEditorOpen(false)}
      setting={setting}
      setSetting={setSetting}
    />
  );
};
```

---

## ⚙️ Configuration

### ImageKit Setup

This project uses ImageKit for image handling. You'll need to set up your account at [ImageKit.io](https://imagekit.io/) and add your credentials to the `.env` file.

### Tailwind Customization

The Tailwind configuration includes custom screen sizes and colors specific to the Twitter/X interface. You can modify them in `tailwind.config.ts`.

---

## 🚀 Roadmap

### Upcoming Features

- 🔐 User authentication and profiles
- 💬 Comments and replies to posts
- 🔔 Real-time notifications
- 🌓 Light/dark theme toggle
- 📊 Analytics dashboard
- 📱 Mobile app-like gestures
- 🔍 Advanced search functionality

### Technical Improvements

- ⚡ Performance optimization with virtualized lists
- ♿ Enhanced accessibility features
- 🧪 Unit and integration tests
- 📦 State management with Redux/Zustand

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  <a href="https://x-mo.vercel.app/">
    <img src="https://img.shields.io/badge/✨-Live%20Demo-blue?style=for-the-badge" alt="Live Demo"/>
  </a>
</p>

<p align="center">
  🌟 Don't forget to star the repository if you found it useful! 🌟
</p>
