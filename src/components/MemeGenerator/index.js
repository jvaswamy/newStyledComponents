import {Component} from 'react'
import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  ImageContainer,
  ImageHeading,
  FormContainer,
  InputFieldContainer,
  LabelHeading,
  InputField,
  SelectInputField,
  Option,
  Button,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    // memoList:
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-img.png',
    topHeading: '',
    bottomHeading: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isShowImage: false,
  }

  onSubmitData = event => {
    event.preventDefault()
    this.setState({isShowImage: true})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  changeTopText = event => {
    this.setState({topHeading: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomHeading: event.target.value})
  }

  changeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    // const {memoList} = this.state
    const {
      imageUrl,
      topHeading,
      bottomHeading,
      fontSize,
      isShowImage,
    } = this.state

    return (
      <AppContainer>
        <ResponsiveContainer>
          <Heading>Meme Generator</Heading>
          {isShowImage && (
            <ImageContainer>
              <ImageHeading fontInput="50px" data-testid="memo">
                {topHeading}{' '}
              </ImageHeading>
              <ImageHeading fontInput={`${fontSize}px`} data-testid="memo">
                {bottomHeading}
              </ImageHeading>
            </ImageContainer>
          )}
          <FormContainer onSubmit={this.onSubmitData}>
            <InputFieldContainer>
              <LabelHeading>Image URL</LabelHeading>
              <InputField
                type="text"
                value={imageUrl}
                onChange={this.onChangeImageUrl}
              />
            </InputFieldContainer>
            <InputFieldContainer>
              <LabelHeading>Top Text</LabelHeading>
              <InputField
                type="text"
                value={topHeading}
                onChange={this.changeTopText}
              />
            </InputFieldContainer>
            <InputFieldContainer>
              <LabelHeading>Bottom Text</LabelHeading>
              <InputField
                type="text"
                value={bottomHeading}
                onChange={this.changeBottomText}
              />
            </InputFieldContainer>
            <InputFieldContainer>
              <LabelHeading>Font Size</LabelHeading>
              <SelectInputField value={fontSize} onChange={this.changeFontSize}>
                {fontSizesOptionsList.map(eachItem => (
                  <Option key={eachItem.optionId}>
                    {eachItem.displayText}
                  </Option>
                ))}
              </SelectInputField>
            </InputFieldContainer>
            <Button type="submit">Generator</Button>
            <Button type="button">newButton</Button>
            <h1>Hello</h1>
            <p>edit this file</p>
          </FormContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
