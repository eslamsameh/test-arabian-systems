import styled from 'styled-components';

export const ToDo = styled.div`
.header{
    text-align: center;
    margin: 50px 0px;
    text-decoration: underline;
    color: #6c757d;
}
.pages{
    margin: 25px 5px;
    cursor: pointer;
}
.active-page{
    text-decoration: underline;
    font-size: 18px
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