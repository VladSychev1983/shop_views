function IconSwitch({icon, onSwitch}) {
    return (
        <div><i className="material-icons" onClick={onSwitch}>{icon}</i></div>
    );
}
export default IconSwitch;