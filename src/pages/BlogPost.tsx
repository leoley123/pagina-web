import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import PageHeader from '../components/PageHeader';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Post no encontrado</h1>
        <Link to="/blog" className="text-blue-600 hover:text-blue-700 flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al Blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={post.title}
        description={post.excerpt}
        imageSrc={post.image}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {formatDate(post.date)}
          </div>
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-1" />
            {post.category}
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 text-gray-900">{children}</h1>,
              h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">{children}</h3>,
              p: ({ children, node }) => {
                // Check if paragraph contains only an image or iframe
                if (node?.children?.length === 1) {
                  const child = node.children[0];
                  if (child.type === 'element' && (child.tagName === 'img' || child.tagName === 'iframe')) {
                    return children;
                  }
                }
                return <p className="mb-4 text-gray-900">{children}</p>;
              },
              img: ({ src, alt }) => (
                <div className="my-8">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              ),
              iframe: ({ node, ...props }) => (
                <div className="my-8 relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    {...props}
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  />
                </div>
              ),
              ul: ({ children }) => <ul className="list-disc pl-6 mb-4 text-gray-900">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 text-gray-900">{children}</ol>,
              li: ({ children }) => <li className="mb-2 text-gray-900">{children}</li>,
              strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
              em: ({ children }) => <em className="italic text-gray-900">{children}</em>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-200 pl-4 my-4 italic text-gray-700">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link to="/blog" className="text-blue-600 hover:text-blue-700 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;