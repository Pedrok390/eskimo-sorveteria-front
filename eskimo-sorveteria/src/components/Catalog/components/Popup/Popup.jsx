export default function Popup(props){
    const {onClose} = props
    const {title, children} = props.popup
    
    function handleOverlayClick(event) {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }
    return(
        <>
            <div className="popup" onClick={handleOverlayClick}>
                <div className="popup__container">
                    {title && <h2 className="popup__title">{title}</h2>}
                    <button className="popup__close" onClick={onClose}>X</button>
                    {children}
                </div>
            </div>
        </>
    )
}