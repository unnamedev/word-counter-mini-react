import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 80px 10px 80px;
  max-width: 768px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const Header = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    
    @media (min-width: 992px) {
        font-size: 38px;
    }
  }
`

export const Field = styled.textarea.attrs({
    placeholder: "Type or paste your text here. We'll never save or send it anywhere else."
})`
  display: block;
  width: 100%;
  resize: none;
  min-height: 200px;
  padding: 16px;
  color: rgba(0, 0, 0, 0.87);
  appearance: none;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0 2px 4px 0, rgb(0 0 0 / 5%) 0 1px 2px 0;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const Row = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
`

export const Column = styled.div`
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0 2px 4px 0, rgb(0 0 0 / 5%) 0 1px 2px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;
  padding: 16px;
  margin-bottom: 20px;
  
  p:nth-child(1) {
    font-size: 30px;
  }
`

export const Icon = styled.div`
  margin-top: auto;
  text-align: center;
`