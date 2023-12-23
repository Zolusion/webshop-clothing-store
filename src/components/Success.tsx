import { CheckCircleIcon } from '@heroicons/react/20/solid'
export default function Success({ message }: { message: string }) {
    if (message == undefined || message == '') {
        return;
    } else {
      return (
        <div className="rounded-md bg-green-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">{message}</h3>
            </div>
          </div>
        </div>
      )
    }
}