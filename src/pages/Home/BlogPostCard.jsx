import arrow from "../../../public/images/blog-posts/arrow-right.png";

const BlogPostCard = ({ product }) => {
  const { id, image, name, description, postedAt } = product;
  return (
    <div className="card w-72 " key={id}>
      <img src={image} alt={name} />
      <div className="px-1.5 pb-4 bg-softBackground w-64 ">
        <p className="mt-2 mb-1 text-xs  text-primary">{postedAt}</p>
        <h3 className="mb-1 text-xl text">{name}</h3>
        <p className="text-sm mb-2 text-textSecondary">{description}</p>
        <button className="flex gap-2 cursor-pointer items-center hover:text-primary">
          Read More <img src={arrow} alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default BlogPostCard;
