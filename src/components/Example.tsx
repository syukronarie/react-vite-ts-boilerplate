import CONST from '@/common/constants'
import React from 'react'

const Example: React.FC = () => {
	React.useEffect(() => {
		console.log(CONST.BASE_API_URL)
	}, [])

	return <div>Example</div>
}

export default Example
