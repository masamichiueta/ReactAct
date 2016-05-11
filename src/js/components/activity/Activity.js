import React from "react";
import { colors } from "../../style.js";

export default class Activity extends React.Component {

  render() {
    const { text, link, imageUrl, date, inverted } = this.props;

    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    const liStyle = {
      liBefore: {
        display: 'table'
      },
      li: {
        marginBottom: '20px',
        position: 'relative'
      },
      liAfter: {
        display: 'table',
        clear: 'both'
      }
    };

    const panelStyle = {
      panelBefore: {
        position: 'absolute',
        top: '26px',
        right: inverted ? 'auto' : '-15px',
        left: inverted ? '-15px' : 'auto',
        display: 'inline-block',
        borderTop: '15px solid transparent',
        borderLeft: inverted ? '0 solid #ccc' : '15px solid #ccc',
        borderRight: inverted ? '15px solid #ccc' : '0 solid #ccc',
        borderBottom: '15px solid transparent'
      },
      panel: {
        width: '46%',
        float: inverted ? 'right' : 'left',
        border: '1px solid #d4d4d4',
        borderRadius: '2px',
        padding: '20px',
        position: 'relative',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.175)'
      },
      panelAfter: {
        position: 'absolute',
        top: '27px',
        right: inverted ? 'auto' : '-14px',
        left: inverted ? '-14px' : 'auto',
        display: 'inline-block',
        borderTop: '14px solid transparent',
        borderLeft: inverted ? '0 solid #fff' : '14px solid #fff',
        borderRight: inverted ? '14px solid #fff' : '0 solid #fff',
        borderBottom: '14px solid transparent'
      }
    }

    const badgeStyle = {
      backgroundColor: colors.instagramColor,
      color: '#fff',
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      fontSize: '1.4em',
      textAlign: 'center',
      position: 'absolute',
      top: '16px',
      left: '50%',
      marginLeft: '-25px',
      backgroundColor: '#999999',
      zIndex: '100',
      borderTopRightRadius: '50%',
      borderTopLeftRadius: '50%',
      borderBottomRightRadius: '50%',
      borderBottomLeftRadius: '50%'
    };

    const imageStyle = {
      maxWidth: "100%",
      height: "auto"
    };

    const titleStyle = {
      marginTop: "0",
      color: colors.instagramColor
    }

    return (
      <div>
        <span style={liStyle.liBefore}></span>
        <li style={liStyle.li}>
          <div style={badgeStyle}>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </div>
          <a target="_blank" href={link}>
            <span style={panelStyle.panelBefore}></span>
            <div style={panelStyle.panel}>
              <div>
                <h5 style={titleStyle}>{text}</h5>
                <p><small class="text-muted"><i class="fa fa-clock-o" aria-hidden="true"></i> {dateStr} via Instagram</small></p>
              </div>
              <div>
                <img src={imageUrl} style={imageStyle} />
              </div>
            </div>
            <span style={panelStyle.panelAfter}></span>
          </a>
        </li>
        <span style={liStyle.liAfter}></span>
      </div>
    );
  }
}
