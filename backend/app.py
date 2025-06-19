from data import reservations, members

def get_reservations_by_name(name):
    matches = []
    for r in reservations:
        if r["member"] == name:
            matches.append(r)
    return matches

def count_total_guests_per_member(name):
    acc = 0
    reservation_data = get_reservations_by_name(name)
    for r in reservation_data:
        acc += int(r["guests"])
    return acc

def convert_all_guest_counts_to_integers(data):
    acc = 0
    count_array = []
    for d in data:
        acc += int(d["guests"])
        count_array.append(acc)
    return count_array

def list_all_unique_members(data):
    array = set()
    for d in data:
        array.add(d["member"])
    return sorted(array)

def find_earliest_reservation(data):
    array = []
    for d in data:
        array.append({"id": d["id"], "arrival": d["arrival"]})
    array = sorted(array, key=lambda x: x["arrival"])
    return array[0]

def empty_notes(data):
    array = []
    for d in data:
        array.append({"id": d["id"], "notes": d["notes"]})
    array = filter(lambda x: x['notes'] == "", reservations)
    return list(array)

def group_reservations_by_member(data):
    result = {}
    for d in data:
        member = d["member"]
        if member not in result:
            result[member] = []
        result[member].append(d)
    return result
    
def identify_overbooked_parties(data):
    array = []
    array = filter(lambda x: int(x["guests"]) > 4, data)
    return list(array)

def identify_overbooked_parties_dict(data):
    result = {}
    for d in data:
        count = int(d["guests"])
        uid = d["id"]
        if count > 4:
            result[uid] = [d]
    return result
            
class Reservation:
    def __init__(self,data=None, *, id=None, mid=None, member=None, arrival=None, guests=None, guest_list=None):
        if data:
            self.id = data.get("id")
            self.mid = data.get("mid")
            self.member = data.get("member")
            self.arrival = data.get("arrival")
            self.guests = data.get("guests")
            self.guest_list = data.get("guest_list")
        else:
            self.id = id
            self.mid = mid
            self.member = member
            self.arrival = arrival
            self.guests = guests
            self.guest_list = guest_list


    def __repr__(self):
        return f"<Reservation {self.member} ({self.guests} guests) on {self.arrival}>"
    
    @staticmethod
    def return_member_string(data, member_name):
        for d in data:
            if d["member"] == member_name:
                return f"<Reservation {d['member']} ({d['guests']} guests) on {d['arrival']}>"
        return "Not found"
    
    @staticmethod
    def return_guest_list_as_list(data, member_name):
        array = []
        for d in data:
            guestlist = d["guest_list"]
            if member_name == d["member"]:
                return guestlist
            
    @staticmethod
    def comma_tice(my_str, what_to_find, what_goes_in_its_place):
        string = my_str.replace(what_to_find, what_goes_in_its_place)
        return string 

        

    
print(Reservation.comma_tice("bowl greasy ass baggins", "y", " "))



