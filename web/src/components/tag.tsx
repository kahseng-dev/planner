interface TagProps {
    text?: string,
}

const Tag = ({ text }:TagProps) => {
    return (
        <span className="border text-sm leading-none border-dashed uppercase font-mono px-1 tracking-wider text-red-400 bg-red-50">{text}</span>
    )
}

export default Tag