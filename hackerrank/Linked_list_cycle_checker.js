function hasCycle(head) {
    // move at half speed, if there is a loop the fast will be at the point as the slow eventually
    var slow = head
    var fast = head
    while (fast){
        fast = fast.next
        if (fast){
            if (fast === slow){
                return true
            }
            fast = fast.next
            slow = slow.next
        }
    }
    return false

}
