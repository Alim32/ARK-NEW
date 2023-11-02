# Project Setup and Deployment Guide

## Getting Started

To begin using this project, follow these steps:

1. Install project dependencies:

  ```bash
  npm install
  ```


## Run the development server:

  ```bash
    npm run dev
  ```

Open your browser and navigate to http://localhost:3000 to see the application in action.


## Optimizing video file sizes in a static build
  
  npm run build will create a static build in the .\out folder
  The video assets supplied are quite large and ffmpeg can reduce them in size to be many times smaller while maintaining quality.
  The -an flag removes the audio track which seems unnecessary and is more likely to cause a browser to not auto-play or indicate sound is coming from the tab
  ```bash
      npm run build
      ffmpeg -y -i .\public\video\Animation-1.mp4 -vcodec libx264 -an -preset veryslow -crf 18 .\out\video\Animation-1.mp4
      ffmpeg -y -i .\public\video\Animation-2.mp4 -vcodec libx264 -an -preset veryslow -crf 18 .\out\video\Animation-2.mp4
      ffmpeg -y -i .\public\video\Animation-3.mp4 -vcodec libx264 -an -preset veryslow -crf 18 .\out\video\Animation-3.mp4
      ffmpeg -y -i .\public\video\Animation-4.mp4 -vcodec libx264 -an -preset veryslow -crf 18 .\out\video\Animation-4.mp4
      ffmpeg -y -i .\public\video\Globe-Animation.mp4 -vcodec libx264 -an -preset veryslow -crf 18 .\out\video\Globe-Animation.mp4
      ffmpeg -y -i .\public\video\hero-animation.mp4 -vcodec libx264 -an -preset veryslow -crf 18 .\out\video\hero-animation.mp4
  ```


## Using Mailchimp Subscribe Locally

Mailchimp is currently enabled using a static html form and not the integration described below.  This is so the website can published as a static site without requiring a backend.

To enable Mailchimp subscription functionality in the local environment, proceed as follows:

1. Create a .env.local file in the root folder of your project.
2. Add the following environment variables to the .env.local file, replacing the placeholders with your actual Mailchimp API credentials:

  ```plaintext
    NEXT_PUBLIC_MAILCHIMP_API_KEY=your-api-key
    NEXT_PUBLIC_MAILCHIMP_ID=your-list-id
    NEXT_PUBLIC_MAILCHIMP_API_SERVER=your-api-server
  ```

Replace your-api-key, your-list-id, and your-api-server with your specific Mailchimp API key, list ID, and API server.



## Deploying on Vercel with Mailchimp Integration

To deploy your application on Vercel and enable Mailchimp integration, follow these steps:

1. Log in to your Vercel Dashboard.
2. Navigate to the project where you want to deploy the application.
3. In the project settings, locate the "Environment Variables" section.
4. Add the same environment variables mentioned above:

  ```plaintext
    NEXT_PUBLIC_MAILCHIMP_API_KEY=your-api-key
    NEXT_PUBLIC_MAILCHIMP_ID=your-list-id
    NEXT_PUBLIC_MAILCHIMP_API_SERVER=your-api-server
  ```

5. Trigger a redeployment of the project.

Vercel will automatically inject the environment variables into your deployed application, enabling Mailchimp integration.

Remember to replace the placeholders (your-api-key, your-list-id, and your-api-server) with your actual Mailchimp API credentials.



## Mailchimp Setup

To get started with Mailchimp integration, follow these steps:

1. Create an account with Mailchimp at [Mailchimp Signup](https://mailchimp.com/signup/).

2. Once you're logged in, navigate to your account settings to access your API Keys. These keys will allow your application to interact with your Mailchimp account.

3. You will need the following three environmental variables from Mailchimp:

   - **API Key:** This is a generated key that provides access to your Mailchimp account.
   - **API Server:** Identifies the Mailchimp server you are connecting to.
   - **Audience ID:** The unique identifier for the audience (list) to which subscribers will be added.

These environmental variables are essential for connecting your application to Mailchimp and enabling newsletter subscriptions.

Remember to keep these variables secure and never share them publicly. You can use them in your project's environment configuration to enable seamless integration with Mailchimp's services.
