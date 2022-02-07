import React, {useState} from "react"
import {VscGithub} from "react-icons/vsc"
import {GlobalStyles} from "./GlobalStyles"
import {Column, Field, Header, Icon, Row, Wrapper} from "./WordCounter.styles"

const WordCounter = () => {
    const [text, setText] = useState('')

    return (
        <>
            <GlobalStyles/>
            <Wrapper>
                <Header>
                    <h1>Word Count</h1>
                    <p>A simple and free text word counter</p>
                </Header>
                <Field value={text} onChange={e => setText(e.target.value)}/>
                <Row>
                    <Column>
                        <p>{text.split(/[\n\r\s]+/g).filter((word) => word.length > 0).length}</p>
                        <p>Words</p>
                    </Column>
                    <Column>
                        <p>{text.length}</p>
                        <p>Characters</p>
                    </Column>
                </Row>

                <Icon>
                    <a href="https://github.com/unnamedev" target="_blank">
                        <VscGithub size={40}/>
                    </a>
                </Icon>
            </Wrapper>
        </>
    )
}

export default WordCounter
