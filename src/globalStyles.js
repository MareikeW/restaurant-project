import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    *::-webkit-scrollbar{
   width: 0px;
}
html{
   --primary-col:#09A76B;
   --white:#fff;
   --milk-white:#f7f7f7;
   --faded-black:#0003;
}
body{
   margin: 0;
   padding: 0;
   line-height: 1.2;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.grid{
   display: grid;
}
.col--2{
   grid-template-columns: repeat(auto-fit,minmax(23rem,1fr));
}
a{
   color: inherit;
   font-size: inherit;
   font-weight: inherit;
   text-decoration: none;
   cursor: pointer;
}
img{
   max-width: 100%;
   max-height: 100%;
}
.btn--link{
   padding:0.875rem 1.5rem;
   text-align: center;
   background-color: var(--primary-col)!important;
   color: #fff!important;
   text-transform: capitalize;
   font-size: 1.2rem;
   font-weight: 500;
   display: inline-block;
   margin: 1rem 0;
   border-radius: 2rem;
   white-space: nowrap;
}
.btn--link:focus{
   box-shadow: 0 0 0 3px #c88
}
.a--link{
   white-space: nowrap;
   padding: 0.5rem 0.875rem;
   background-color: var(--faded-black);
   border-radius: 0.25rem;
   
}
.wrapper{
   background-color: var(--milk-white);
   max-width: 1500px;
   margin: 0 auto;
}
.section{
   margin: 2rem auto;
   width: 100%;
   font-family: Arial, Helvetica, sans-serif;
   background-color: var(--white);
}
.section__header{
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: var(--primary-col);
   padding: 1rem 1.5rem ;
   text-transform: capitalize;
   color: var(--white);
}

`;

export default GlobalStyle;