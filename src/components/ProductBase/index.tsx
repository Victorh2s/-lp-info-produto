import { ShoppingCart } from "@phosphor-icons/react";
import { SlideBase } from "./style";

interface ProductBaseProps{
  image_url:string; 
  title: string; 
  author:string; 
  description:string; 
  amount:number;
}

export function ProductBase({image_url, title, author, description, amount}:ProductBaseProps){
  return ( 
    <SlideBase>
      <img src={image_url}  width={10}/>
      <div>
        <h2>{title}</h2> 
        <span>{author}</span> 
        <p>{description}</p>
      
        <section>
         <span><del style={{fontSize:"12px",textOverflow: 'ellipsis', whiteSpace: 'nowrap', color:"gray"}}>De {(amount * 1.5).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} Por </del></span>
          <span>
            {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span> 
          <button><ShoppingCart size={25} weight="fill"/></button>
        </section>

      </div>
    </SlideBase>
  )
}