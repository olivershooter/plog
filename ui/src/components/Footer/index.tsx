import { styled } from 'styled-components'

import globalStyleVars from '../../globalStyleVariables'

const Footer = () => {
    return (
        <OuterFooterWrapper>
            <InnerFooterWrapper>
                this is a footer
            </InnerFooterWrapper>
        </OuterFooterWrapper>
    )
}

const OuterFooterWrapper = styled('footer')({
    display: 'flex',
    alignItems: 'center',
    background: '#00000008',
    justifyContent: 'center',
    padding: '1rem 0.5rem',
    position: 'fixed',
    bottom: 0,
    width: '100%'
})

const InnerFooterWrapper = styled('div')({
    maxWidth: globalStyleVars.maxPageWidth,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
})

export default Footer