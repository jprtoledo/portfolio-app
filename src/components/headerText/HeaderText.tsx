import * as React from 'react';
import './HeaderText.css'

interface HeaderTextProps {
    content: string;
}
 
class HeaderText extends React.Component<HeaderTextProps> {
    render() { 
        return (
            <li><a href="">{this.props.content}</a></li>
        );
    }
}
 
export default HeaderText;