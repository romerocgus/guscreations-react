import React from "react";
import './BioNav.css';

function BioNav({ page, setPage }){

	const pageFwd = ()=>{
		let num = page;
		num++
		if(num > 2)	num = 0;
		setPage(num);
	}

	const pageBack = ()=>{
		let num = page;
		num--;
		if(num === -1)
			num = 2;
		setPage(num);
	}

	const pageChange = (num)=>{
		setPage(num);
	}
	
    return(
        <div className="bio__nav">
				<button 
					id="bio__btn-back" 
					className="bio__nav-btn" 
					tabIndex="0"
					onClick={pageBack}
				>
					<i className="fas fa-chevron-left"></i>
				</button>
				<div className="bio__nav-dots">
					<div className={`bio__nav-dot ${page === 0 && 'dot-active'}`} onClick={()=>pageChange(0)}></div>
					<div className={`bio__nav-dot ${page === 1 && 'dot-active'}`} onClick={()=>pageChange(1)}></div>
					<div className={`bio__nav-dot ${page === 2 && 'dot-active'}`} onClick={()=>pageChange(2)}></div>
				</div>
				<button 
					id="bio__btn-fwd" 
					className="bio__nav-btn" 
					tabIndex="0"
					onClick={pageFwd}
				>
					<i className="fas fa-chevron-right"></i>
				</button>
		</div>
    )
};

export {BioNav};