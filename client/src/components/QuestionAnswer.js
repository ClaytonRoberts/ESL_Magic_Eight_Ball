import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import '../App.css';
import EightBallLogoLarge from './images/EightBallLogoLarge.png'
import posed from 'react-pose';
import ReactGA from "react-ga";

const Box = posed.div({
    hoverable: true,
    draggable: 'x',
    dragBounds: { left: '-10%', right: '10%' },
    init: { scale: 1 },
    hover: { scale: 1.1 },
    drag: { scale: 1.0 }
  });

var Possible_Answers = [
    "It is certain.", 
    "It is decidedly so.", 
    "Without a doubt.", 
    "Yes - definitely.", 
    "You may rely on it.", 
    "As I see it, yes.", 
    "Most likely.", 
    "Outlook good.", 
    "Yes.", 
    "Signs point to yes.", 
    "Reply hazy, try again.", 
    "Ask again later.", 
    "Better not tell you now.", 
    "Cannot predict now.", 
    "Concentrate and ask again.", 
    "Don't count on it.", 
    "My reply is no.", 
    "My sources say no.", 
    "Outlook not so good.", 
    "Very doubtful."];

class QuestionAnswer extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            loaded: false,
            textTemp:"",
            inputText: "enter new yes/no question here...",
            QandA: [ ]
        }
    }

    setRandomAnswer(){ 
        return Possible_Answers[~~(Math.random() * Possible_Answers.length)];
    }
          
    clicked(e){
        this.setState({
            counter: this.state.counter +1,
            loaded: !this.state.loaded,
            textTemp:"",
            inputText: "...",
            QandA: [...this.state.QandA, {id: uuid(), currentQuestion: this.refs.qBox.value, currentAnswer: this.setRandomAnswer()} ]
        });
    }
    keyPress(e){
        if(e.keyCode === 13){
            this.setState({
                counter: this.state.counter +1,
                loaded: !this.state.loaded,
                textTemp:"",
                inputText: "...",
                QandA: [...this.state.QandA, {id: uuid(), currentQuestion: this.refs.qBox.value, currentAnswer: this.setRandomAnswer()} ]
            });
        }
    }

    componentDidMount(){
        ReactGA.initialize('UA-153195999-1');
     }

    render() {
        
        
        const {loaded} = this.state;
      

            //  QandA Table, shown below input and button, state based; ...
            //  ...const for getting and returning state data which will be displayed, called in render return 
            const arrayQandA = this.state.QandA.map((detail,index)=>{
                return <tbody style={{fontSize: "20px"}} key={index}>
                        <tr><td>{index+1}</td></tr>
                        <tr><td>Q:  {detail.currentQuestion}</td></tr>
                        <tr><td>A:  {detail.currentAnswer}</td></tr>
                        <tr><td>-----</td></tr>
                </tbody>
            });

            //-------------------------------------------------------------------------

            
            return ( 
                 
                
                <Container>
                
                    <h4>Current Question: </h4> 

                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            
                            <input 
                                onKeyDown={(e) => {  this.keyPress(e); }}
                                style={{fontSize: "30px", width:"90%", display: 'flex',  justifyContent:'center', alignItems:'center'}}
                                name="question" 
                                ref="qBox" 
                                type="text"
                                placeholder={this.state.inputText}>
                                    
                            </input>
                        
                        </div>
                    
                    
                    <Box className="box"
                        style={{display: 'flex',  justifyContent:'center', alignItems:'center', margin:"2%"}}
                        >
                        <img 
                            src={EightBallLogoLarge} 
                            height="40%" 
                            width="40%"
                            
                            alt ="eightball" 
                            onClick={ (e) => {  this.clicked(e); } }/>
                    </Box>

                
                    
                    <h4>Current Answer: </h4> 
                    
                    <TransitionGroup>
                    {arrayQandA.length > 0 &&
                        <div>
                            
                            <CSSTransition 
                                    in={loaded}
                                    timeout={1500} 
                                    classNames="fade"
                                    style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                                >
                                <h2 >
                                    <strong>{this.state.QandA[this.state.QandA.length-1].currentAnswer}</strong> 
                                </h2>
                                
                            </CSSTransition>
                            
                            
                        </div>}
                    </TransitionGroup>
                       

                    <div style={{marginTop: '1rem'}}><h4>This Session's Questions and Answers: </h4><table>{arrayQandA}</table></div>
                    

                </Container>
                
            );  
                        
    }    
}


export default QuestionAnswer