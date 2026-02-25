#!/usr/bin/env node

/**
 * Dynamic Sitemap Generator for TEPS Website
 * 
 * This script fetches blog posts from the API and generates a complete sitemap.xml
 * Run this script whenever you add new blog posts to update the sitemap.
 * 
 * Usage: node generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const API_BASE_URL = 'https://app.eventeps.com';
const SITE_URL = 'https://eventeps.com';

// Helper function to create URL-friendly slugs (matches the frontend logic)
function createSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
}

// Generate sitemap XML
async function generateSitemap() {
    try {
        console.log('Fetching blog posts from API...');
        
        // Fetch blog posts from API
        const response = await fetch(`${API_BASE_URL}/api/v1/landing-page/all-resources`);
        const data = await response.json();
        
        if (!data.success) {
            throw new Error('Failed to fetch blog posts from API');
        }
        
        const blogPosts = data.data.all_resources || [];
        console.log(`Found ${blogPosts.length} blog posts`);
        
        // Generate XML content
        let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- About Page -->
  <url>
    <loc>${SITE_URL}/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Blog Main Page -->
  <url>
    <loc>${SITE_URL}/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Case Studies Page -->
  <url>
    <loc>${SITE_URL}/case-studies</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Privacy Policy Page -->
  <url>
    <loc>${SITE_URL}/privacy-policy</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <!-- Dynamic Blog Posts -->\n`;

        // Add each blog post
        blogPosts.forEach(post => {
            const slug = createSlug(post.topic);
            const lastmod = post.updated_at 
                ? new Date(post.updated_at).toISOString().split('T')[0]
                : new Date().toISOString().split('T')[0];
            
            xmlContent += `  <url>
    <loc>${SITE_URL}/blog/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>never</changefreq>
    <priority>0.6</priority>
  </url>
`;
        });

        xmlContent += `</urlset>`;
        
        // Write to sitemap.xml
        const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
        fs.writeFileSync(sitemapPath, xmlContent);
        
        console.log(`✅ Sitemap generated successfully with ${blogPosts.length} blog posts`);
        console.log(`📍 Sitemap saved to: ${sitemapPath}`);
        
    } catch (error) {
        console.error('❌ Error generating sitemap:', error.message);
        process.exit(1);
    }
}

// Run the generator
generateSitemap();