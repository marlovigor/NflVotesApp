import React from 'react';
import Seed from './Seed'


class ProductList extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          products: [],
        };

        this.handleProductUpVote = this.handleProductUpVote.bind(this);
      }
      componentDidMount(){
          this.setState({products:Seed});
      }


    handleProductUpVote(productID){
        const nextProduct = this.state.products.map((product)=>{
            if(product.id === productID){
                return Object.assign({},product,{
                    votes:product.votes + 1,
                })
            }else {
                return product;
            }
        });
        this.setState({
            products:nextProduct,
        })
    }




    render() {

        const seed = this.state.products.sort((a,b)=> (
            b.votes - a.votes
        ))

        
        const productComponent = seed.map((product) =>(
        <Product
                    Key={'product-' + product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.SubmitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                    onVote={this.handleProductUpVote}
                />
        
        ));
        return (
            <div className='ui unstackable items'>
              {productComponent}
            </div>
        );
    }
}

class Product extends React.Component {
    constructor(props){
        super(props);

        this.handleUpVote=this.handleUpVote.bind(this);
    }


    handleUpVote(){
        this.props.onVote(this.props.id);
    }
    
    render() {
        
        return (
            <div stle={backg}>
            <div style={items}>
 
                <div>
                    <img style={prodimg} src={this.props.productImageUrl} />
                </div>
                <div>
                    <a onClick={this.handleUpVote}>
                      <img  style={buttomstyleup}src ={'https://cdn0.iconfinder.com/data/icons/round-arrows-1/134/up_small_red-512.png'} />

                    </a>
                    <div style={votes}>
                        <a>
                            <i style={carrotup}/>
                        </a>
                        <h2>Votes</h2>
                        {this.props.votes}
                    </div>
                    <div>
                        <a href={this.props.url}>


                        </a>
                        <h1 style={title}>{this.props.title}</h1>
                    </div>
                    <p style={desc}>
                        {this.props.description}
                    </p>
                    <div>
                        <span style={submitter}>Submitted by:</span>
                        <img  style={userimg}src={this.props.submitterAvatarUrl} />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


const backg={
 backgroundColor:'red',


}
const items = {
    width: '66%',
    margin: '0 auto',
    borderColor:'red',
    position:'relative',
    backgroundColor:"grey",
    height:'200px',
        
    

}
  
const buttomstyleup={
    position:'absolute',
    width:'40px',
    margin:'0px',
    bottom:'5px',
    left:'10px',


}


const prodimg={
    position:'absolute',
    width:'35%',
    top:'25px',

}

const votes={
    position:'absolute',
    bottom:'10px',
    left:'160px'

}
const submitter={
    position:'absolute',
    bottom:"1px",
    right:'140px',
    margin:'0px',
    fontSize:'1.2em'
}


const carrotup={


}


const title={
    position:'relative',
    left:'15px',

}

const desc={
    position:'relative',
    textAlign:'center',
    width:"35%",
    margin:'0 auto'


}

const userimg={
    position:'absolute',
    width:'23%',
    right:'20px',
    margin:'0'

}


export default ProductList


