import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAAAFF;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    border-radius: 6px ;
    

    input {
        width: 100%;
        height: 75px;
        background-color: #AAAAFF;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;

        border-radius: 6px 6px 0 0 ;
    }
`