import type { NextConfig } from "next";

const nextConfig: NextConfig = {  
      typescript: {
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  experimental:{
    serverActions:{
      bodySizeLimit:'4mb'
    }
  },
 images:{
  remotePatterns:[
    {
       protocol: 'https', 
       hostname:"rlbuwebtqhoteolthxwh.supabase.co",
       pathname:"/**"
    },
    {
      protocol:"https", 
      hostname:"lh3.googleusercontent.com", 
      pathname:"/**"
    }
  ]
 },
};

export default nextConfig;
