import React from "react";

type Props = {
	icon: any,
	link: string,
	name: string,
}

export const SNS = (props: Props) => {
	return (
		<div>
			<a href={props.link}>
				{props.icon}
			</a>
		</div>
	)
}