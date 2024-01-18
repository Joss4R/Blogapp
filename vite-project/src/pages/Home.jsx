import { Link } from "react-router-dom";

const Home = () => {

    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolorum, accusantium provident praesentium id harum?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quia, aliquam expedita earum enim in debitis. Facere eaque vitae quam.",
            img: "https://images.unsplash.com/photo-1704162518285-43f14c7339fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolorum, accusantium provident praesentium id harum?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quia, aliquam expedita earum enim in debitis. Facere eaque vitae quam.",
            img: "https://images.unsplash.com/photo-1704162751314-cf8dc177c851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolorum, accusantium provident praesentium id harum?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quia, aliquam expedita earum enim in debitis. Facere eaque vitae quam.",
            img: "https://images.unsplash.com/photo-1704125567682-c735c82e9165?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolorum, accusantium provident praesentium id harum?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quia, aliquam expedita earum enim in debitis. Facere eaque vitae quam.",
            img: "https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 5,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolorum, accusantium provident praesentium id harum?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quia, aliquam expedita earum enim in debitis. Facere eaque vitae quam.",
            img: "https://images.unsplash.com/photo-1703960262596-8ffe31402641?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

  return (
    <div className='home'>
        <div className="posts">
           {posts.map(post=> (
            <div className="post" key={post.id}>
                <div className="img">
                    <img src={post.img} alt="" />
                </div>
                <div className="content">
                    <Link className="link" to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>

                    </Link>
                    <p>{post.desc}</p>
                    <button>Read More</button>
                </div>
            </div>
           ))} 
        </div>
    </div>
  )
}

export default Home