import { CircleX, Edit } from "lucide-react";

function UserList({ users, handleDelete, handleUpdate }) {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-gray-800">
        {users.length !== 0 ? "All Users" : "Add User To See"}
      </h1>
      <div className="space-y-3">
        {users.map(function (user) {
          return (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900">
                  {user.firstName} {user.lastName}
                </h3>
                <div className="space-y-0.5">
                  <h4 className="text-sm text-gray-600">{user.phone}</h4>
                  <h4 className="text-sm text-gray-600">{user.email}</h4>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleUpdate(user)}
                  className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
                  aria-label="Edit user"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded"
                  aria-label="Delete user"
                >
                  <CircleX size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
