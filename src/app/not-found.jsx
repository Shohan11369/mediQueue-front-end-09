import { Search } from "lucide-react";

const NotFound = () => {
    return (
        <div className="col-span-full py-24 text-center space-y-4">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto text-muted-foreground">
                <Search className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold">No items found</h3>
            <p className="text-muted-foreground text-2xl">Try adjusting your search Or Use right path.</p>
        </div>
    );
};

export default NotFound;