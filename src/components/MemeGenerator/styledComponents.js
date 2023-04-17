import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  width: 85%;
`

export const Heading = styled.h1`
  color: #35469c;
`
export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nature-img.png');
  background-size: cover;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ImageHeading = styled.h1`
    color:#ffffff;
    font-family:"Open Sans"
    font-size:${props => props.fontInput};
    

`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const LabelHeading = styled.label`
  margin-bottom: 0px;

  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`

export const InputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const SelectInputField = styled.select`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const Option = styled.option``

export const Button = styled.button`
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
  padding: 0px 25px 0px 25px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 25px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`
