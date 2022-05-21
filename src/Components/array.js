import React from 'react'
import './array.css'

import {mergeSort} from "./merge";
export default class RandomArray extends React.Component {


	constructor(props) {
		super(props);
		this.state={
			randomArray:[]
		}
	}

	componentWillMount() {
		this.setState([])

		this.resetArray()
		console.log(this.state.randomArray)
	}

	componentDidMount() {
		this.setState([])
		this.resetArray();
		console.log(this.state.randomArray)

	}
	mergeSort(){
		const jsSort=this.state.randomArray.slice().sort((a,b)=>a-b);
		const sortAlgo=mergeSort(this.state.randomArray)
		console.log(jsSort)
		console.log("new")
		console.log(sortAlgo)
	}


	resetArray() {
		const brush=[]

		const arrayNumber=this.state.randomArray;
		for (let i = 0; i < 20; i++) {
			arrayNumber.push(Math.floor(Math.random() * 100+5));
		}
		this.setState({arrayNumber})


	}


	render() {
		const array = this.state.randomArray
		console.log(this.state.randomArray)
		this.mergeSort()
		return (
			<div className="array-container">
				{array?array.map((value, idx) => (
					<div
						className="array-bar"
						key={idx}
						style={{
							backgroundColor:'turquoise' ,
							height: `${value*8}px`,
						}}
						>

						<div className="button">

						</div>
					</div>
				)):<p>No</p>}

				<button onClick={()=>{this.componentWillMount()}}>
					Generate New Array
				</button>
			</div>
		);

	}



}
