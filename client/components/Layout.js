import Header from './Header';

const layoutStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd'
}

export default (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);