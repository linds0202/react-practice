import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewResourceMutation } from "./resourcesApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import { TAGS } from "../../config/tags"

const NewResourceForm = () => {

    const [addNewResource, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewResourceMutation()

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [link, setLink] = useState('')
    const [tags, setTags] = useState(['Online'])

    // const [userId, setUserId] = useState(users[0].id)

    useEffect(() => {
        if (isSuccess) {
            setName('')
            setDesc('')
            setLink('')
            setTags([])
            //setUserId('')
            navigate('/dash/resources')
        }
    }, [isSuccess, navigate])

    const onNameChanged = e => setName(e.target.value)
    const onDescChanged = e => setDesc(e.target.value)
    const onLinkChanged = e => setLink(e.target.value)
    const onTagsChanged = e => {
        const values = Array.from(
            e.target.selectedOptions, //HTMLCollection 
            (option) => option.value
        )
        setTags(values)
    }
    // const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [name, desc, link, tags.length].every(Boolean) && !isLoading

    const onSaveResourceClicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewResource({ name, desc, link, tags })
        }
    }

    const options = Object.values(TAGS).map(tag => {
        return (
            <option
                key={tag}
                value={tag}

            > {tag}</option >
        )
    })

    const errClass = isError ? "errmsg" : "offscreen"
    const validTitleClass = !name || !link ? "form__input--incomplete" : ''
    const validTextClass = !desc ? "form__input--incomplete" : ''
    const validRolesClass = !Boolean(tags.length) ? 'form__input--incomplete' : ''

    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <form className="form" onSubmit={onSaveResourceClicked}>
                <div className="form__title-row">
                    <h2>New Resource</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                    </div>
                </div>
                <label className="form__label" htmlFor="name">
                    Resource Name:</label>
                <input
                    className={`form__input ${validTitleClass}`}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    value={name}
                    onChange={onNameChanged}
                />

                <label className="form__label" htmlFor="desc">
                    Description:</label>
                <textarea
                    className={`form__input form__input--text ${validTextClass}`}
                    id="desc"
                    name="desc"
                    value={desc}
                    onChange={onDescChanged}
                />

                <label className="form__label" htmlFor="link">
                    Link:</label>
                <input
                    className={`form__input ${validTitleClass}`}
                    id="link"
                    name="link"
                    type="text"
                    autoComplete="off"
                    value={link}
                    onChange={onLinkChanged}
                />

                <label className="form__label" htmlFor="tags">
                    ASSIGNED TAGS:</label>
                <select
                    id="tags"
                    name="tags"
                    className={`form__select ${validRolesClass}`}
                    multiple={true}
                    size="3"
                    value={tags}
                    onChange={onTagsChanged}
                >
                    {options}
                </select>
            </form>
        </>
    )

    return content
}

export default NewResourceForm