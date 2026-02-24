import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "../../components/Nav";
import Hero from './Hero';
import config from '../../config/api';

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const location = useLocation();
    const [blogPost, setBlogPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get blog ID from router state or extract from URL
    const blogId = location.state?.blogId;
    const blogData = location.state?.blogData;

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                setLoading(true);
                
                // If we have blog data from navigation state, use it initially
                if (blogData) {
                    setBlogPost({
                        id: blogData.id,
                        title: blogData.title,
                        excerpt: stripHtml(blogData.fullContent).substring(0, 200) + '...',
                        image: blogData.image,
                        content: blogData.fullContent,
                        author: 'TEPS Team', // Default author
                        date: new Date().toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        }),
                        readTime: Math.ceil(stripHtml(blogData.fullContent).length / 1000) + ' min read'
                    });
                    
                    // Still fetch from API to get complete data including related posts
                    if (blogId) {
                        const response = await fetch(config.getApiUrl(`${config.endpoints.RESOURCE_BY_ID}/${blogId}`));
                        const data = await response.json();
                        
                        if (data.success && data.data) {
                            const nextResources = data.data.next_resources || [];
                            
                            // Transform next_resources into related posts
                            const transformedRelatedPosts = nextResources.map(relatedResource => ({
                                id: relatedResource.id,
                                title: relatedResource.topic,
                                excerpt: stripHtml(relatedResource.description).substring(0, 100) + '...',
                                image: config.getStorageUrl(relatedResource.image),
                                slug: createSlug(relatedResource.topic),
                                is_pinned: relatedResource.is_pinned
                            }));
                            
                            setRelatedPosts(transformedRelatedPosts);
                        }
                    }
                    
                    setLoading(false);
                    return;
                }

                // If no blog data in state, fetch from API using ID
                if (blogId) {
                    const response = await fetch(config.getApiUrl(`${config.endpoints.RESOURCE_BY_ID}/${blogId}`));
                    const data = await response.json();
                    
                    if (data.success && data.data) {
                        const resource = data.data.single_resources;
                        const user = data.data.user;
                        const nextResources = data.data.next_resources || [];
                        
                        setBlogPost({
                            id: resource.id,
                            title: resource.topic,
                            excerpt: stripHtml(resource.description).substring(0, 200) + '...',
                            image: config.getStorageUrl(resource.image),
                            content: resource.description,
                            author: user?.name || 'TEPS Team',
                            date: new Date().toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            }),
                            readTime: Math.ceil(stripHtml(resource.description).length / 1000) + ' min read'
                        });
                        
                        // Transform next_resources into related posts
                        const transformedRelatedPosts = nextResources.map(relatedResource => ({
                            id: relatedResource.id,
                            title: relatedResource.topic,
                            excerpt: stripHtml(relatedResource.description).substring(0, 100) + '...',
                            image: config.getStorageUrl(relatedResource.image),
                            slug: createSlug(relatedResource.topic),
                            is_pinned: relatedResource.is_pinned
                        }));
                        
                        setRelatedPosts(transformedRelatedPosts);
                    } else {
                        setError('Blog post not found');
                    }
                } else {
                    setError('Blog post ID not provided');
                }
            } catch (err) {
                setError('Failed to load blog post');
                console.error('Error fetching blog post:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPost();
    }, [blogId, blogData]);

    // Helper function to strip HTML tags
    const stripHtml = (html) => {
        if (!html) return '';
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent || temp.innerText || '';
    };

    // Helper function to create URL-friendly slugs
    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
            .trim()
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
    };

    const handleBack = () => {
        navigate('/blog');
    };

    const handleRelatedPostClick = (relatedPost) => {
        navigate(`/blog/${relatedPost.slug}`, { 
            state: { 
                blogId: relatedPost.id, 
                blogData: {
                    id: relatedPost.id,
                    title: relatedPost.title,
                    fullContent: relatedPost.excerpt,
                    image: relatedPost.image,
                    is_pinned: relatedPost.is_pinned
                }
            } 
        });
    };

    // Loading state
    if (loading) {
        return (
            <div className='bg-[rgba(0,0,0,0.05)]'>
                <Navbar />
                <Hero />
                <div className="min-h-screen">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
                        <div className="animate-pulse">
                            <div className="h-6 bg-gray-300 rounded w-32 mb-6"></div>
                            <div className="w-full h-64 md:h-96 bg-gray-300 rounded mb-8"></div>
                            <div className="h-8 bg-gray-300 rounded mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-300 rounded"></div>
                                <div className="h-4 bg-gray-300 rounded"></div>
                                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className='bg-[rgba(0,0,0,0.05)]'>
                <Navbar />
                <Hero header="THE EXPERIENCE PLUG SYSTEM  BLOG" subHeader="Your source for the latest news, insights, and updates from The Experience Plug System."/>
                <div className="min-h-screen">
                    <div className="max-w-7xl mx-auto py-3 md:py-6">
                        <button
                            onClick={handleBack}
                            className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
                        >
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Blog
                        </button>
                        <div className="text-center py-12">
                            <div className="text-red-600 mb-4">
                                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-xl font-semibold mb-2">Failed to Load Blog Post</h3>
                                <p className="text-gray-600 mb-4">{error}</p>
                                <button 
                                    onClick={() => window.location.reload()}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Try Again
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // If no blog post data
    if (!blogPost) {
        return (
            <div className='bg-[rgba(0,0,0,0.05)]'>
                <Navbar />
                <Hero  header="THE EXPERIENCE PLUG SYSTEM  BLOG" subHeader="Your source for the latest news, insights, and updates from The Experience Plug System." />
                <div className="min-h-screen">
                    <div className="max-w-7xl mx-auto py-3 md:py-6">
                        <button
                            onClick={handleBack}
                            className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
                        >
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Blog
                        </button>
                        <div className="text-center py-12">
                            <h3 className="text-xl font-semibold mb-2">Blog Post Not Found</h3>
                            <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-[rgba(0,0,0,0.05)]'>
            <Navbar />
            <Hero header="THE EXPERIENCE PLUG SYSTEM  BLOG" subHeader="Your source for the latest news, insights, and updates from The Experience Plug System." />
            <div className="min-h-screen pb-16 bg-[rgba(0,0,0,0.05)] px-6 md:px-8">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto py-3 md:py-6">
                    <button
                        onClick={handleBack}
                        className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Blog
                    </button>

                    {/* Featured Image */}
                    <div className="max-w-full mx-auto mb-8">
                        <img
                            src={blogPost.image}
                            alt={blogPost.title}
                            className="w-full h-64 md:h-96 object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Placeholder for broken images */}
                        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                            <div className="text-center text-gray-500">
                                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm">Image unavailable</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {blogPost.title}
                    </h1>

                    <div className="flex items-center text-gray-600 space-x-6 mb-6">
                        <div className="flex items-center">
                            <User size={16} className="mr-2" />
                            {blogPost.author}
                        </div>
                        <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            {blogPost.date}
                        </div>
                        <div className="flex items-center">
                            <Clock size={16} className="mr-2" />
                            {blogPost.readTime}
                        </div>
                    </div>

                    {/* <p className="text-xl text-gray-600 leading-relaxed">
                        {blogPost.excerpt}
                    </p> */}
                </div>

                {/* Article Content */}
                <article className="max-w-7xl mx-auto md:py-8 py-2 ">
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: blogPost.content }}
                    />
                </article>

                {/* Back to Blog Button */}
                <div className="max-w-7xl mx-auto py-8 border-t">
                    <button
                        onClick={handleBack}
                        className="text-blue-600 rounded-lg hover:text-blue-700 transition-colors font-semibold"
                    >
                        ← Back to All Posts
                    </button>
                </div>

                {/* Other Related Posts */}
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 bg-white">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                        Related Posts
                    </h2>
                    
                    {relatedPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <div 
                                    key={relatedPost.id}
                                    className="cursor-pointer"
                                >
                                    <div className="w-full h-[191px] mb-4 relative">
                                        <img 
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover rounded-lg"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        {/* Placeholder for broken images */}
                                        <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                                            <div className="text-center text-gray-500">
                                                <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-xs">Image unavailable</span>
                                            </div>
                                        </div>
                                        {/* Pinned Badge */}
                                        {relatedPost.is_pinned === 1 && (
                                            <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                Pinned
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {relatedPost.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {relatedPost.excerpt}
                                    </p>
                                    
                                    {/* Read More Button */}
                                    <button 
                                        onClick={() => handleRelatedPostClick(relatedPost)}
                                        className="bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200 px-4 py-2 rounded-lg text-sm"
                                    >
                                        Read More →
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-gray-500">
                            <p>No related posts available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogPost;