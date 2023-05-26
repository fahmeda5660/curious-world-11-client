import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle("Blog");
    return (
        <div className='container mb-[130px] mx-auto mt-6'>

                <article>
                    <h3 className='font-semibold text-lg'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <blockquote>
                    JSON Web Token is an open standard that allows two parties, a client and a server to share security information. This information is digitally signed so it can be verified and trusted. <br />
                    
                    By employing refresh tokens, you may strike a balance between the access requirements for your users and the security measures adopted . Access tokens help individuals obtain access to the resources they need to do their jobs.
                    <br />
                    Every HTTP request includes these tokens, which enable the server to confirm the user's identity. The data in the token is signed using a server-owned private key to guarantee integrity. The server only has to check the signature supplied by the client with the signature produced using the private key when it receives a token from the client. The token is legitimate if the signatures match. <br />

                    The server-side session has storage for both the access token and refresh token. Web sessions can be used by the application and the server to communicate. After that, the token is accessible for any requests coming from server-side code.
                    </blockquote>
                </article>

                <article className='my-6'>
                    <h3 className='font-semibold text-lg'>2. Compare SQL and NoSQL databases?</h3>
                    <blockquote>
                    Relational database management systems, or RDBMS, are the most common names for SQL databases, while non-relational or distributed databases are the most common names for NoSQL databases. While NoSQL databases feature dynamic, flexible schema, some databases have inflexible schema, such as tables with fixed rows and columns. While NoSQL is horizontally scalable, SQL is vertically scalable, which means it can scale up with a larger server. Although NoSQL is recommended for storing Graph or hierarchical data, SQL databases are not well suited for this purpose.

                    </blockquote>
                </article>

                <article >
                    <h3 className='font-semibold text-lg'>3. What is express js? What is Nest JS?
</h3>
                    <blockquote>
                        Express is a framework that runs on top of NodeJS and aids in handling requests and responses. Next.js is a full stack framework that builds on React to enhance your project's SEO, development experience, and performance while Express.js provides a backend framework for creating APIs. A built-in API routing system that might take the place of Express.js is one of these characteristics.
                    </blockquote>
                </article>

                <article className='mt-6'>
                    <h3 className='font-semibold text-lg'>4. What is MongoDB aggregate and how does it work?</h3>
                    <blockquote>
                    MongoDB Aggregation is the process of going through various phases with a huge collection of documents to process them. A pipeline is made up of the several stages. Filtering, sorting, grouping, reshaping, and altering documents as they move through a pipeline are all possible.

                    A horizontal scale-out design underpins MongoDB, an open-source document database that uses a flexible schema to store data.  A MongoDB database stores data in collections rather than tables.

                    MongoDB is the best option when managing numerous servers and a high volume of access requests is required.
                    </blockquote>
                </article>
            </div>
    );
};

export default Blog;