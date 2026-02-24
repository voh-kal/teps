import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import config from '../../config/api';

function BlogSection() {
    const [currentPage, setCurrentPage] = useState(1);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const itemsPerPage = 9;

    // Helper function to strip HTML tags and decode entities
    const stripHtml = (html) => {
        if (!html) return '';
        // Create a temporary div to parse HTML
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

    // Fetch blogs from API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const response = await fetch(config.getApiUrl(config.endpoints.ALL_RESOURCES));
                const data = await response.json();
                if (data.success) {
                    // Transform API data to match our component structure
                    const transformedBlogs = data.data.all_resources.map(resource => ({
                        id: resource.id,
                        image: config.getStorageUrl(resource.image),
                        title: resource.topic,
                        slug: createSlug(resource.topic),
                        excerpt: resource.description ? stripHtml(resource.description).substring(0, 150) + '...' : 'No description available',
                        fullContent: resource.description,
                        is_pinned: resource.is_pinned
                    }));
                    
                    // Sort by pinned first, then by ID
                    const sortedBlogs = transformedBlogs.sort((a, b) => {
                        if (a.is_pinned && !b.is_pinned) return -1;
                        if (!a.is_pinned && b.is_pinned) return 1;
                        return b.id - a.id; // Sort by newest first
                    });
                    
                    setBlogs(sortedBlogs);
                } else {
                    setError('Failed to fetch blogs');
                }
            } catch (err) {
                setError('Network error while fetching blogs');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Calculate pagination
    const totalPages = Math.ceil(blogs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    };

    const handleReadMore = (blog) => {
        // Navigate using slug but pass the ID in state for API calls
        navigate(`/blog/${blog.slug}`, { state: { blogId: blog.id, blogData: blog } });
    };

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                {/* Loading State */}
                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="animate-pulse">
                                <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
                                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                                <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="text-center py-12">
                        <div className="text-red-600 mb-4">
                            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">Failed to Load Blogs</h3>
                            <p className="text-gray-600 mb-4">{error}</p>
                            <button 
                                onClick={() => window.location.reload()}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                )}

                {/* Blog Grid */}
                {!loading && !error && blogs.length > 0 && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {currentBlogs.map((blog) => (
                                <div key={blog.id} className="overflow-hidden">
                                    {/* Blog Image */}
                                    <div className="w-full h-48 relative bg-gray-200">
                                        <img 
                                            src={blog.image} 
                                            alt={blog.title}
                                            className="w-full h-full object-cover rounded-lg"
                                            onError={(e) => {
                                                // Hide broken image and show placeholder
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                            onLoad={(e) => {
                                                // Ensure placeholder is hidden when image loads
                                                if (e.target.nextSibling) {
                                                    e.target.nextSibling.style.display = 'none';
                                                }
                                            }}
                                        />
                                        {/* Placeholder for broken images */}
                                        <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                                            <div className="text-center text-gray-500">
                                                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-sm">Image unavailable</span>
                                            </div>
                                        </div>
                                        {/* Pinned Badge */}
                                        {blog.is_pinned === 1 && (
                                            <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                Pinned
                                            </div>
                                        )}
                                    </div>

                                    {/* Blog Content */}
                                    <div className="py-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                            {blog.excerpt}
                                        </p>
                                        
                                        {/* Read More Button */}
                                        <button 
                                            onClick={() => handleReadMore(blog)}
                                            className="bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200 px-4 py-2 rounded-lg"
                                        >
                                            Read More →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center space-x-2">
                                {/* Previous Button */}
                                <button
                                    onClick={goToPreviousPage}
                                    disabled={currentPage === 1}
                                    className={`p-2 rounded-lg ${
                                        currentPage === 1 
                                            ? 'text-gray-400 cursor-not-allowed' 
                                            : 'text-gray-700 hover:bg-gray-200'
                                    } transition-colors`}
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                {/* Page Numbers */}
                                {[...Array(totalPages)].map((_, index) => {
                                    const pageNumber = index + 1;
                                    return (
                                        <button
                                            key={pageNumber}
                                            onClick={() => goToPage(pageNumber)}
                                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                                currentPage === pageNumber
                                                    ? 'bg-blue-600 text-white'
                                                    : 'text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {pageNumber}
                                        </button>
                                    );
                                })}

                                {/* Next Button */}
                                <button
                                    onClick={goToNextPage}
                                    disabled={currentPage === totalPages}
                                    className={`p-2 rounded-lg ${
                                        currentPage === totalPages 
                                            ? 'text-gray-400 cursor-not-allowed' 
                                            : 'text-gray-700 hover:bg-gray-200'
                                    } transition-colors`}
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* No Blogs State */}
                {!loading && !error && blogs.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-500 mb-4">
                            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">No Blogs Available</h3>
                            <p className="text-gray-600">Check back later for new content.</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default BlogSection;