import styled from 'styled-components';

export const PostsStyles = styled.div`
background: #f8f9fa;
min-height: 90vh;
.header{
    text-align: center;
    padding-top: 30px;
    text-decoration: underline;
    color: #343a40;
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
    font-size: 18px;
    line-height: 20px;
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