"use client"

import { Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 z-40 flex flex-col bg-bg-surface border-r border-border-default transition-transform duration-200 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-12 flex items-center justify-between px-4 border-b border-border-default shrink-0">
        <span className="text-sm font-medium text-text-primary">Projects</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-7 w-7 text-text-muted hover:text-text-primary hover:bg-bg-elevated"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="flex flex-col flex-1 min-h-0 p-3">
        <TabsList className="w-full bg-bg-elevated">
          <TabsTrigger value="my-projects" className="flex-1 text-xs">
            My Projects
          </TabsTrigger>
          <TabsTrigger value="shared" className="flex-1 text-xs">
            Shared
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects" className="flex-1 mt-3">
          <ScrollArea className="h-full">
            <div className="flex items-center justify-center h-32">
              <span className="text-xs text-text-faint">No projects yet</span>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="shared" className="flex-1 mt-3">
          <ScrollArea className="h-full">
            <div className="flex items-center justify-center h-32">
              <span className="text-xs text-text-faint">No shared projects</span>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>

      <div className="p-3 border-t border-border-default shrink-0">
        <Button variant="default" size="sm" className="w-full gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </div>
  )
}
