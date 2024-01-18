import edit from "../imgs/edit.png"
import Delete from "../imgs/delete.png"
import { Link } from "react-router-dom"
import Menu from "../components/Menu"

const Single = () => {
  return (
    <div className="single">
        <div className="content">
           <img src="https://images.unsplash.com/photo-1695987196867-0fd9ff6bd503?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
                <div className="user">
                    <img src="https://images.unsplash.com/photo-1704146253749-88cf0541e2cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}> 
                            <img src={edit} alt="#" />
                        </Link>
                        <img src={Delete} alt="#" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti ratione nihil nam veniam rerum.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolorem asperiores magni repellat ratione quidem necessitatibus dicta, molestiae aut recusandae ipsam sequi accusamus. Veniam eius alias nisi quaerat doloremque eaque inventore expedita possimus. Earum ad nemo rerum aliquid voluptatibus eveniet similique quod autem, fugiat enim delectus, expedita, porro provident tempora in inventore. Veritatis facere tenetur dolorem cum eveniet quos rem rerum explicabo odit veniam illum, ea, <b> sint accusantium dolor quia vero enim. Accusamus ducimus laborum dolore eveniet possimus explicabo reprehenderit illum vel quae aliquam, modi quod. Autem nobis suscipit voluptatum iusto consequatur? Obcaecati cum laboriosam in quod asperiores inventore eligendi beatae expedita excepturi tempore fugit dolor facere, totam corrupti minima officia? Excepturi porro, doloribus quod labore velit corrupti commodi assumenda aperiam quidem, <b></b> illo repudiandae magnam officiis totam facilis dignissimos. Consequatur ratione ducimus voluptas quam aut doloremque perferendis quae quasi numquam, alias laborum dolorum minima unde sapiente reiciendis fuga maiores, omnis quaerat incidunt optio, amet quia! Consequuntur, deleniti necessitatibus quas, assumenda </b>inventore ab rem quam molestiae optio nostrum cum ipsum tempora similique facilis voluptates, in doloribus animi quidem nihil sint earum iure ducimus! Asperiores tempore pariatur magnam perspiciatis? Totam delectus corporis ipsa provident, possimus rerum cumque fugiat, numquam impedit, perferendis tempora.</p>
        </div>
        <Menu/>
    </div>
  )
}

export default Single