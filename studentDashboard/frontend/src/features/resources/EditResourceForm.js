import { useState, useEffect } from "react"
import { useUpdateResourceMutation, useDeleteResourceMutation } from "./resourcesApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { TAGS } from "../../config/tags"

const EditResourceForm = ({ resource }) => {

    const [updateResource, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateResourceMutation()

    const [deleteResource, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteResourceMutation()

    const navigate = useNavigate()

    const [name, setName] = useState(resource.name)
    const [desc, setDesc] = useState(resource.desc)
    const [link, setLink] = useState(resource.link)
    const [tags, setTags] = useState(resource.tags)

    useEffect(() => {

        if (isSuccess || isDelSuccess) {
            setName('')
            setDesc('')
            setLink('')
            setTags([])
            navigate('/dash/resources')
        }

    }, [isSuccess, isDelSuccess, navigate])

    const onNameChanged = e => setName(e.target.value)
    const onDescChanged = e => setDesc(e.target.value)
    const onLinkChanged = e => setLink(e.target.value)
    const onTagsChanged = e => {
        const values = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        )
        setTags(values)
    }

    const canSave = [name, desc, link, tags.length].every(Boolean) && !isLoading

    const onSaveResourceClicked = async (e) => {
        if (canSave) {
            await updateResource({ id: resource.id, name, desc, link, tags })
        }
    }

    const onDeleteResourceClicked = async () => {
        await deleteResource({ id: resource.id })
    }

    const created = new Date(resource.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
    const updated = new Date(resource.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })

    //create html for tags drop down menu
    const options = Object.values(TAGS).map(tag => {
        return (
            <option
                key={tag}
                value={tag}

            > {tag}</option >
        )
    })

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    const validTitleClass = !name || !link ? "form__input--incomplete" : ''
    const validTextClass = !desc ? "form__input--incomplete" : ''
    const validRolesClass = !Boolean(tags.length) ? 'form__input--incomplete' : ''

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''

    const content = (
        <>
            <p className={errClass}>{errContent}</p>

            <form className="form" onSubmit={e => e.preventDefault()}>
                <div className="form__title-row">
                    <h2>Edit Resource {resource.name}</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                            onClick={onSaveResourceClicked}
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        <button
                            className="icon-button"
                            title="Delete"
                            onClick={onDeleteResourceClicked}
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </div>
                <label className="form__label" htmlFor="resource-name">
                    Name:</label>
                <input
                    className={`form__input ${validTitleClass}`}
                    id="resource-name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    value={name}
                    onChange={onNameChanged}
                />

                <label className="form__label" htmlFor="resource-desc">
                    Desc:</label>
                <textarea
                    className={`form__input form__input--text ${validTextClass}`}
                    id="resource-desc"
                    name="desc"
                    value={desc}
                    onChange={onDescChanged}
                />

                <label className="form__label" htmlFor="resource-link">
                    Link:</label>
                <input
                    className={`form__input ${validTitleClass}`}
                    id="resource-link"
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
                <div className="form__row">
                    <div className="form__divider">
                        <p className="form__created">Created:<br />{created}</p>
                        <p className="form__updated">Updated:<br />{updated}</p>
                    </div>
                </div>
            </form>
        </>
    )

    return content
}

export default EditResourceForm