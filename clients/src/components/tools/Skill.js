import Tool from "./Tool";
import store from "../../redux/store";
export default class Skill extends Tool {
    constructor(canvas){
        super(canvas);
        this.listen()
        this.state = {
            items: store.getState().skills,
          };
        requestAnimationFrame(() => this.onLoad());
    }
    listen() {
        this.canvas.onclick = this.onClick.bind(this);
        this.canvas.onload = this.onLoad.bind(this);
    }

    onClick(event){
        const canvas = document.querySelector('#canvas')
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    }
    onLoad(timestamp){

        window.requestAnimationFrame(this.onLoad.bind(this)) 
        this.circleDraw(timestamp)
        this.linePart()
        this.skillDraw()

    }
    circleDraw(timestamp) {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        this.ctx.beginPath();
        this.ctx.arc(
            this.ctx.canvas.width /2, 
            this.ctx.canvas.height/2, 70,0, 
            Math.PI * 2); 
        this.ctx.fillStyle = 'transparent'
        this.ctx.fill();   
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = '#959da0';   
        this.ctx.stroke();  
    }
    linePart(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.ctx.canvas.width/2 - 60,  this.ctx.canvas.height/2 - 35);
        this.ctx.lineTo(50, 50);
        this.ctx.strokeStyle = '#959da0';   
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(this.ctx.canvas.width/2 + 60,  this.ctx.canvas.height/2 - 35);
        this.ctx.lineTo(this.ctx.canvas.width - 50, 50);
        this.ctx.strokeStyle = '#959da0';   
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(this.ctx.canvas.width/2 - 35,  this.ctx.canvas.height/2 + 60);
        this.ctx.lineTo(50, this.ctx.canvas.height - 50);
        this.ctx.strokeStyle = '#959da0';   
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(this.ctx.canvas.width/2 + 35,  this.ctx.canvas.height/2 + 60);
        this.ctx.lineTo(this.ctx.canvas.width - 50, this.ctx.canvas.height - 50);
        this.ctx.strokeStyle = '#959da0';   
        this.ctx.stroke();

    }
    skillDraw(){
        this.state.items[0].forEach((skill, index) => {
            this.ctx.beginPath();
        this.ctx.arc(
            this.ctx.canvas.width /2 + 125 + (70 * index), 
            this.ctx.canvas.height/2 + 10 - (60 * index), 30,0, 
            Math.PI * 2); 
        this.ctx.fillStyle = 'transparent'
        this.ctx.fill();   
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = '#959da0';
        this.ctx.stroke();  
        this.ctx.beginPath();
        this.ctx.moveTo(650 + (70 * index),  387 - (60 * index));
        this.ctx.lineTo(669 + (71 * index), 370 - (61 * index));
        this.ctx.strokeStyle = '#b0a5ab';   
        this.ctx.stroke();  
        })
        
        // this.ctx.beginPath();
        // this.ctx.arc(
        //     this.ctx.canvas.width /2 + 125, 
        //     this.ctx.canvas.height/2 + 10, 30,0, 
        //     Math.PI * 2); 
        // this.ctx.fillStyle = 'transparent'
        // this.ctx.fill();   
        // this.ctx.lineWidth = 3;
        // this.ctx.strokeStyle = '#959da0';
        // this.ctx.stroke();  
        // this.ctx.beginPath();
        // this.ctx.moveTo(650,  387);
        // this.ctx.lineTo(669, 370);
        // this.ctx.strokeStyle = '#b0a5ab';   
        // this.ctx.stroke(); 

        // this.ctx.beginPath();
        // this.ctx.arc(
        //     this.ctx.canvas.width /2 + 195, 
        //     this.ctx.canvas.height/2 - 50, 30,0, 
        //     Math.PI * 2); 
        // this.ctx.fillStyle = 'transparent'
        // this.ctx.fill();   
        // this.ctx.lineWidth = 3;
        // this.ctx.strokeStyle = '#959da0';
        // this.ctx.stroke();  
        // this.ctx.beginPath();
        // this.ctx.moveTo(720, 327);
        // this.ctx.lineTo(742, 309);
        // this.ctx.strokeStyle = '#b0a5ab';   
        // this.ctx.stroke(); 

    }

}