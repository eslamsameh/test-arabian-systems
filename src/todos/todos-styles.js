import styled from 'styled-components';

export const ToDo = styled.div`
background: #f8f9fa;
padding: 50px 0px;
.header{
   
    padding: 30px;
    border-bottom: 1px solid #dae0e5 !important;

}
.pages{
    margin: 25px 5px;
    cursor: pointer;
    color: #6c757d;
    font-size: 14px;
}
.active-page{
    text-decoration: underline;
    font-size: 18px;
    color: #000;
    font-size: 14px;
}
@media only screen and (max-width: 500px) {
  .d-flex {
    display: block !important;
    text-align: center;

      a {
   display: block !important;
   text-align: center

      }
  }
}
}

`