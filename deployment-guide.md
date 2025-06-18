# NULLBOTS AWS Deployment Guide

## Prerequisites
- AWS CLI configured with appropriate permissions
- Node.js and npm installed
- MongoDB Atlas account (recommended for production)

## Step 1: Set up MongoDB Atlas (Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist IP addresses (0.0.0.0/0 for all IPs or specific IPs)
5. Get your connection string

## Step 2: Deploy Backend to AWS Lambda

### Option A: Using Serverless Framework

1. Install Serverless Framework globally:
   ```bash
   npm install -g serverless
   ```

2. Navigate to server directory:
   ```bash
   cd server
   npm install
   ```

3. Create `.env` file in server directory:
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   ```

4. Deploy to AWS:
   ```bash
   serverless deploy
   ```

5. Note the API Gateway URL from the deployment output

### Option B: Using AWS Elastic Beanstalk

1. Install EB CLI:
   ```bash
   pip install awsebcli
   ```

2. Initialize Elastic Beanstalk:
   ```bash
   cd server
   eb init
   ```

3. Create environment:
   ```bash
   eb create nullbots-api
   ```

4. Set environment variables:
   ```bash
   eb setenv MONGO_URI=your_mongodb_connection_string
   ```

5. Deploy:
   ```bash
   eb deploy
   ```

## Step 3: Deploy Frontend to AWS Amplify

1. Build the project locally to test:
   ```bash
   npm run build
   ```

2. Create a new Amplify app:
   - Go to AWS Amplify Console
   - Click "New app" > "Host web app"
   - Connect your Git repository
   - Choose the branch to deploy

3. Configure build settings:
   - Use the provided `amplify.yml` file
   - Add environment variable: `VITE_API_BASE_URL` with your API Gateway URL

4. Deploy the app

## Step 4: Update CORS Settings

Update your backend CORS settings to include your Amplify domain:

```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://your-amplify-domain.amplifyapp.com'
  ],
  credentials: true
}));
```

## Step 5: Test the Deployment

1. Visit your Amplify URL
2. Test the contact form
3. Check MongoDB Atlas to see if data is being saved

## Environment Variables

### Frontend (.env)
```
VITE_API_BASE_URL=https://your-api-gateway-url.amazonaws.com
```

### Backend
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
```

## Troubleshooting

1. **CORS Issues**: Make sure your API allows requests from your Amplify domain
2. **Database Connection**: Ensure MongoDB Atlas allows connections from AWS Lambda IPs
3. **Environment Variables**: Double-check all environment variables are set correctly
4. **Build Errors**: Check the Amplify build logs for specific error messages

## Cost Optimization

- Use MongoDB Atlas free tier for development
- AWS Lambda free tier covers most small applications
- Amplify has a generous free tier for hosting

## Security Best Practices

1. Use environment variables for sensitive data
2. Implement rate limiting on your API
3. Validate and sanitize all inputs
4. Use HTTPS only
5. Regularly update dependencies