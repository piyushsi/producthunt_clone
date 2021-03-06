import React,{Component} from 'react';
import ReaactDOM from 'react-dom';
import './style.css'
import data from "./data.json"
import Header from './components/Header'
var dataX = data;
class Content extends Component{
    constructor(){
      super()
      this.state={
        data:data,
        add:{
            "title": "",
            "para": "",
            "comments": 0,
            "vote": 0,
            "type": "",
            "imgurl":"https://ph-files.imgix.net/719fe138-8598-46ec-8259-ef17ba46c0c2?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
          }
      }
    }
    handleChangeTitle = e => {
        this.setState({ add:{
            "title":e.target.value,
            "para": this.state.add.para,
            "comments": 0,
            "vote": 0,
            "type": this.state.add.type,
            "imgurl":this.state.add.imgurl} });
      };
      handleChangePara = e => {
        this.setState({ add:{
            "title":this.state.add.title,
            "para": e.target.value,
            "comments": 0,
            "vote": 0,
            "type": this.state.add.type,
            "imgurl":this.state.add.imgurl} });
      };
      handleChangeType = e => {
        this.setState({ add:{
            "title":this.state.add.title,
            "para": this.state.add.para,
            "comments": 0,
            "vote": 0,
            "type": e.target.value,
            "imgurl":this.state.add.imgurl} });
      };
      handleChangeImage = e => {
        this.setState({ add:{
            "title":this.state.add.title,
            "para": this.state.add.para,
            "comments": 0,
            "vote": 0,
            "type": this.state.add.type,
            "imgurl":e.target.value} });
      };
    
      render() {return <main>
        <Header/>
         <main className="main">
             <div className="main_1">
                 <h2>Today</h2>
                 <span className='main_head'>POPULAR | NEWEST</span>
                 <div className='main_1_1'>
                 {this.state.data.products.map(p=>{ 

                    return <li className='products'>
                         <img src={p.imgurl}/>
                         <div className="products_1">
                             <h3 className='title'>{p.title}</h3>
                             <p className='para'>{p.para}</p>
                             <span className='comments'>
                             <svg className='svg_com' width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 0 1-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill="grey" fill-rule="evenodd"></path></svg>
                             {p.comments}</span>
                             <span className='type'>{p.type}</span>
                         </div>
                         <div className="up_vote"><span onClick={(e)=>{
                              dataX.products.map(a=>{
                                  if (a.title==p.title){
                                   a.vote=a.vote+1
                                  }
                                  else {

                                  }
                              });                 
                            //  dataX.products[0].vote=dataX.products[0].vote+1;
                             this.setState({data:dataX})
                         }
                         }>^</span><br/>{p.vote}</div>
                     </li>
                 })}
                 </div>
             </div>
             <div className='main_2'>
                 <h3>Makers working Today</h3>
                 <div className="main_2_1">
                 {this.state.data.c.map(a=>{
                      return (
                         <div className="img_user" dangerouslySetInnerHTML={{ __html: a }} />
                       );
                 })}
                 <hr/>
                 <h3>Start Working Now</h3>
                 
                 </div>
                 <h3>Product Hunt Radio</h3>
                 <div className="main_2_1 main_2_2">
                     <div><b>How to grow and monetize communities with Jill Salzman</b></div>
                     <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg" class="playIcon_465b6"><g fill="none" fill-rule="evenodd"><path d="M17.5 35C27.165 35 35 27.165 35 17.5S27.165 0 17.5 0 0 7.835 0 17.5 7.835 35 17.5 35zm-3.71-24.57a.906.906 0 0 0-.444.116.925.925 0 0 0-.47.807l-.015 12.892a.923.923 0 0 0 .918.924.918.918 0 0 0 .483-.14L24.8 18.58a.928.928 0 0 0 .001-1.57l-10.526-6.44a.895.895 0 0 0-.483-.14h-.002z" fill="#FFF"></path><path d="M13.79 10.43a.906.906 0 0 0-.444.116.925.925 0 0 0-.47.807l-.015 12.892a.923.923 0 0 0 .918.924.918.918 0 0 0 .483-.14L24.8 18.58a.928.928 0 0 0 .001-1.57l-10.526-6.44a.895.895 0 0 0-.483-.14h-.002z" fill-opacity=".8" fill="#545656"></path></g></svg>
                     <img src="https://ph-static.imgix.net/radio/ph_radio_cat.png?auto=format&auto=compress&w=90"/>
                 </div>
                 <h3>Newsletter</h3>
                 <div className="main_2_1 main_2_3">
                     <img src='https://ph-files.imgix.net/742f9303-ea31-4ab8-89fa-664e6be69029?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=290&h=110&fit=clamp'/>
                     <div>Remote teams, this is for you</div>
                     <hr/>
                     <span><b>Get the best new products in your inbox, every day 👇</b></span>
                     <input placeholder="Your email"></input>
                     <button><b>SUSCRIBE</b></button>
                 </div>
                 <h3>Add products here</h3>
                 <div className="main_2_1 main_2_4">
                     <input type='text' value={this.state.add.title}  onChange={this.handleChangeTitle} placeholder='Add Title'/>
                     <input type='text' value={this.state.add.para} onChange={this.handleChangePara} placeholder='Add About'/>
                     <input type='text' value={this.state.add.imageurl} onChange={this.handleChangeImage} placeholder='Add ImageUrl'/>
                     <input type='text' value={this.state.add.type} onChange={this.handleChangeType} placeholder='Add Type'/>
                     <button onClick={()=>{
                           dataX.products.push(this.state.add)
                           console.log(dataX);
                           this.setState({add: {
                            "title": "",
                            "para": "",
                            "comments": 0,
                            "vote": 0,
                            "type": "",
                            "imgurl":""
                          }})
                     }
                     }>Add</button>

                     
                 </div>
             </div>
             
         </main>
         
     </main>
        
      }
    }


ReaactDOM.render(<Content />,document.getElementById('root'));
