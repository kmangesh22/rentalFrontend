import React from 'react'
import { List, Form, Input, Button, Comment } from 'antd'

export const Editor = ({ onChange, onSubmit, submitting, value }) => (
	<div style={{ marginBottom: '10px' }}>
		<Form.Item>
			<Input.TextArea rows={4} onChange={onChange} value={value} />
		</Form.Item>
		<Form.Item>
			<Button
				htmlType='submit'
				loading={submitting}
				onClick={onSubmit}
				type='primary'
			>
				Add Comment
			</Button>
		</Form.Item>
	</div>
)
const CommentList = ({ comments }) => (
	<List
		dataSource={comments}
		// header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
		itemLayout='horizontal'
		renderItem={props => <Comment {...props} />}
	/>
)

export default CommentList
