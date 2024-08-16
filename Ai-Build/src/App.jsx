import React from "react";
import Button from "./components/shared/Buttons/Button";
import Form from "./components/shared/Forms/Form";
import Input from "./components/shared/Inputs/Input";
import Alert from "./components/shared/Alerts/Alert";
import Avatar from "./components/shared/Avatars/Avatar";
import Breadcrumb from "./components/shared/Breadcrumbs/Breadcrumb";
import Card from "./components/shared/Cards/Card";
import Dropdown from "./components/shared/Dropdowns/Dropdown";
import Modal from "./components/shared/Modals/Modal";
import Pagination from "./components/shared/Pagination/Pagination";
import ProgressBar from "./components/shared/ProgressBars/ProgressBar";
import Table from "./components/shared/Tables/Table";
import Tabs from "./components/shared/Tabs/Tabs";
import Tooltip from "./components/shared/Tooltips/Tooltip";

function App() {
	return (
		<div style={{ padding: "20px" }}>
			<h1>Test App</h1>

			{/* Test Button Component */}
			<Button label="Click Me" />

			{/* Test Form Component */}
			<Form>
				<Input placeholder="Enter your name" />
				<Input type="email" placeholder="Enter your email" />
				<Button label="Submit" />
			</Form>

			{/* Test Alert Component */}
			<Alert message="This is an alert!" type="success" />

			{/* Test Avatar Component */}
			<Avatar
				src="https://via.placeholder.com/150"
				alt="User Avatar"
				size="large"
			/>

			{/* Test Breadcrumb Component */}
			<Breadcrumb
				items={[
					{ label: "Home", link: "/" },
					{ label: "Dashboard", link: "/dashboard" },
					{ label: "Profile" },
				]}
			/>

			{/* Test Card Component */}
			<Card
				title="Card Title"
				content="This is the content of the card."
				image="https://via.placeholder.com/300"
				footer={<Button label="Learn More" />}
			/>

			{/* Test Dropdown Component */}
			<Dropdown
				label="Select an option"
				options={["Option 1", "Option 2", "Option 3"]}
				onSelect={(value) => console.log(`Selected: ${value}`)}
			/>

			{/* Test Modal Component */}
			<Modal
				isOpen={true}
				onClose={() => console.log("Closed")}
				title="Modal Title">
				<p>This is a modal!</p>
			</Modal>

			{/* Test Pagination Component */}
			<Pagination
				currentPage={1}
				totalPages={5}
				onPageChange={(page) => console.log(`Page: ${page}`)}
			/>

			{/* Test ProgressBar Component */}
			<ProgressBar progress={70} label="70%" />

			{/* Test Table Component */}
			<Table
				headers={["Name", "Age", "Location"]}
				data={[
					{ Name: "John Doe", Age: 30, Location: "New York" },
					{ Name: "Jane Smith", Age: 25, Location: "San Francisco" },
				]}
			/>

			{/* Test Tabs Component */}
			<Tabs
				tabs={[
					{ label: "Tab 1", content: <p>Content 1</p> },
					{ label: "Tab 2", content: <p>Content 2</p> },
					{ label: "Tab 3", content: <p>Content 3</p> },
				]}
			/>

			{/* Test Tooltip Component */}
			<Tooltip text="This is a tooltip">
				<Button label="Hover over me" />
			</Tooltip>
		</div>
	);
}

export default App;
